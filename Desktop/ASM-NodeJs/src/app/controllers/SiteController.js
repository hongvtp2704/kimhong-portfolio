const Product = require("../model/product");
const { multipleMongooseToObject } = require("../../until/mongoose");
const { mongooseToObject } = require("../../until/mongoose");
const product = require("../model/product");

class SiteController {
  index(req, res, next) {
    var totalProduct = 9;
    Product.find({})
      .skip(totalProduct - 6)
      .limit(6)
      .then((product) =>
        res.render("home", {
          product: multipleMongooseToObject(product),
        })
      )
      .catch(next);
  }
  showProducts(req, res, next) {
    Product.find({})
      .then((product) =>
        res.render("./product/products", {
          product: multipleMongooseToObject(product),
        })
      )
      .catch((error) => next(error));
    // res.render("products");
  }
}

module.exports = new SiteController();
