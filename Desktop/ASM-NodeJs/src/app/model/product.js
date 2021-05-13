const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Product = new Schema(
  {
    name: { type: String, maxLength: 250, require: true },
    image: { type: String, require: true },
    price: { type: String, require: true },
    oldprice: { type: String, require: true },
    sortdescription: { type: String, maxLength: 500, require: true },
    description: { type: String, maxLength: 1000, require: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", Product);
