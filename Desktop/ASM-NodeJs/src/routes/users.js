const express = require("express");
const router = express.Router();
const UsersControllers = require("../app/controllers/UsersControllers");

router.get("/signup", UsersControllers.signup);
router.post("/createuser", UsersControllers.createUser);
router.get("/login", UsersControllers.login);
router.post("/login", UsersControllers.logined);
router.get("/logout", UsersControllers.logout);

module.exports = router;
