const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    minimumOrder: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

productSchema.virtual("allReviews", {
  ref: "ReviewList",
  foreignField: "productId",
  localField: "_id",
});

const products = mongoose.model("ProductList", productSchema);

module.exports = products;
