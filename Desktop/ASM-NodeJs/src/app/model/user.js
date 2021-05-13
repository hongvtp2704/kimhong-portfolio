const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const User = new Schema(
  {
    userName: { type: String, maxLength: 50, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    typeOfUser: { type: Number, default: 1 },
    slug: { type: String, slug: "userName", unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
