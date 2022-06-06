const express = require("express");
const productColl = require("./../Model/product");
const orderColl = require("./../Model/orders");
const { verifyJWT, verifyAdmin } = require("./auth");

const router = express.Router();

router.post("/", async (req, res) => {
  const addOrder = await orderColl.create(req.body);
  res.status(200).json(addOrder);
});
router.delete("/:id", verifyJWT, async (req, res) => {
  const cancelOrder = await orderColl.findByIdAndDelete(req.params.id);
  res.status(200).json(cancelOrder);
});

router.get("/", async (req, res) => {
  const addOrder = await orderColl.find().populate("productData");
  res.status(200).json(addOrder);
});

router.get("/:user", async (req, res) => {
  const email = req.params.user;
  const orders = await orderColl.find({ user: email }).populate("productData");

  res.status(200).json(orders);
});

module.exports = router;
