const Product = require("../model/product");
const { multipleMongooseToObject } = require("../../until/mongoose");
const { mongooseToObject } = require("../../until/mongoose");
class ProductsController {
  similarProduct(req, res, next) {
    var totalProduct = 9;
    Product.find({})
      .skip(totalProduct - 3)
      .limit(3)
      .then((products) =>
        res.render("./product/product-details", {
          products: multipleMongooseToObject(products),
        })
      )
      .catch(next);
  }

  detail(req, res, next) {
    Product.findOne({ slug: req.params.slug })
      .then((product) =>
        res.render("./product/product-details", {
          product: mongooseToObject(product),
        })
      )
      .catch(next);
  }
  search(req, res, next) {
    const name = req.body.name;
    Product.find({ name: { $regex: name, $options: "i" } })
      .then((product) => {
        res.render("./product/products", {
          product: multipleMongooseToObject(product),
        });
      })
      .catch(next);
  }
}

module.exports = new ProductsController();
