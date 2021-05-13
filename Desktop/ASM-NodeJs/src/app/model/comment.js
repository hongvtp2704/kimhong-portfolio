const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Comment = new Schema(
  {
    rating: { type: Number, maxLength: 5, minLength: 1, require: true },
    comment: { type: String, require: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", Comment);
