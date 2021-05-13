const express = require("express");
const router = express.Router();
const productsController = require("../app/controllers/ProductsController");

//[POST] /product/search
router.post("/search", productsController.search);
//[GET] /products/details
router.get(
  "/:slug",
  productsController.detail,
  productsController.similarProduct
);

module.exports = router;
