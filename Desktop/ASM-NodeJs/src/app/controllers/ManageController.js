const Product = require("../model/product");
const { multipleMongooseToObject } = require("../../until/mongoose");
const { mongooseToObject } = require("../../until/mongoose");
const jwt = require("jsonwebtoken");
class ManageController {
  //[GET] manage/product/stored
  storedProducts(req, res, next) {
    try {
      var token = req.cookies.token;
      var ketqua = jwt.verify(token, "mk");
      if (ketqua) {
        Product.find({})
          .then((products) =>
            res.render("manage/products", {
              products: multipleMongooseToObject(products),
            })
          )
          .catch(next);
      }
    } catch (err) {
      return res.redirect("/user/login");
    }
  }
  //[GET] manage/product/addProduct
  addProduct(req, res, next) {
    try {
      var token = req.cookies.token;
      var ketqua = jwt.verify(token, "mk");
      if (ketqua) {
        res.render("./manage/addProduct");
      }
    } catch (err) {
      return res.redirect("/user/login");
    }
  }
  //[POST] manage/product/addPro
  addPro(req, res) {
    const formData = req.body;
    const product = new Product(formData);
    product
      .save()
      .then(() => res.redirect("/manage/stored/product"))
      .catch((error) => {});
  }
  //[GET] manage/product/:id/edit
  editProduct(req, res, next) {
    Product.findById(req.params.id)
      .then((product) =>
        res.render("./manage/editProduct", {
          product: mongooseToObject(product),
        })
      )
      .catch(next);
  }
  //[PUT] manage/product/:id
  updateProduct(req, res, next) {
    Product.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/manage/stored/product"))
      .catch(next);
  }

  //[DELETE] manage/product/:id
  deleteProduct(req, res, next) {
    Product.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/manage/stored/product"))
      .catch(next);
  }
}

module.exports = new ManageController();
