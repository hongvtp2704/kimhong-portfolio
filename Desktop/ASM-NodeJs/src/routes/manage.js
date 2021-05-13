const express = require("express");
const router = express.Router();
const ManageController = require("../app/controllers/ManageController");

//[GET] /manage/product/addProduct
router.get("/product/addProduct", ManageController.addProduct);
//[POST] /manage/product/addPro
router.post("/product/addPro", ManageController.addPro);
//[GET] /manage/product/:id/edit
router.get("/product/:id/edit", ManageController.editProduct);
//[PUT] /manage/product/:id
router.put("/product/:id", ManageController.updateProduct);
//[DELETE] /manage/product/:id
router.delete("/product/:id", ManageController.deleteProduct);
//[GET] /manage/stored/product
router.get("/stored/product", ManageController.storedProducts);

module.exports = router;
