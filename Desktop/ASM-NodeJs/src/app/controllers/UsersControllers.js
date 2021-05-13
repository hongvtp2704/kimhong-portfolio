const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
class UsersControllers {
  //[GET] user/signup
  signup(req, res) {
    res.render("user/signup");
  }
  //[POST] user/createUser
  createUser(req, res, next) {
    const userName = req.body.userName;
    const password = req.body.password;
    const email = req.body.email;

    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          console.log(user.email);
          return res.send("Email đã tồn tại");
        }
        return bcrypt.hash(password, 12);
      })
      .then((hashPassword) => {
        const user = new User({
          userName: userName,
          email: email,
          password: hashPassword,
        });
        user.save();
      })
      .then(() => {
        console.log("Tạo tài khoản thành công");
        res.redirect("login");
      })
      .catch(next);
  }
  //[GET] user/login
  login(req, res) {
    res.render("user/login");
  }
  //[POST] user/login
  logined(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
      email: email,
    })
      .then((user) => {
        if (!user) return res.send("Email không hợp lệ!");
        return Promise.all([bcrypt.compare(password, user.password), user]);
      })
      .then((result) => {
        const isMatch = result[0];
        const user = result[1];
        if (!isMatch) return res.send("Password không khớp");
        const payload = {
          email: user.email,
          typeOfUser: user.typeOfUser,
        };
        return jwt.sign({ payload }, "mk");
      })
      .then((token) => {
        console.log("Đăng nhập thành công");
        res.cookie("token", token);
        res.redirect("/");
      })
      .catch(next);
  }
  logout(req, res, next) {
    try {
      var token = req.cookies.token;
      var ketqua = jwt.verify(token, "mk");
      if (ketqua) {
        res.clearCookie("token", token);
        res.send("Đã đăng xuất");
      }
    } catch {
      return res.send("Chưa đăng nhập");
    }
  }
}

module.exports = new UsersControllers();
