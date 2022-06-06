const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    productData: {
      type: mongoose.Schema.ObjectId,
      ref: "ProductList",
    },
    brand: {
      type: String,
      required: true,
    },
    TotalPrice: {
      type: String,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      default: "Pending",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const orders = mongoose.model("OrderList", orderSchema);

module.exports = orders;
