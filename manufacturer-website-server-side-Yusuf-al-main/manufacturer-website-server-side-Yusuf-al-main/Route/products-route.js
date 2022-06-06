const express = require("express");
const productColl = require("./../Model/product");
const reviewColl = require("./../Model/review");

const router = express.Router();

router.post("/", async (req, res) => {
  const addProduct = await productColl.create(req.body);
  if (addProduct) {
    return res.status(201).json({ success: true, message: "Prodect Added" });
  } else {
    return res
      .status(401)
      .json({ succes: false, message: "Something went wrong" });
  }
});

router.get("/", async (req, res) => {
  const products = await productColl.find();
  res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
  const product = await productColl
    .findById(req.params.id)
    .populate("allReviews");
  res.status(200).json(product);
});

router.put("/:id", async (req, res) => {
  const product = await productColl.findByIdAndUpdate(
    req.params.id,
    { $set: { quantity: req.body.remainingQuan } },
    { new: true }
  );
  res.status(200).json(product);
});
router.delete("/:id", async (req, res) => {
  const product = await productColl.findByIdAndDelete(req.params.id);
  res.status(200).json(product);
});
router.post("/add-review", async (req, res) => {
  const addReview = await reviewColl.create(req.body);
  res.status(201).json({ success: true, addReview });
});

router.get("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const reviews = await reviewColl.find({ productId: id });
  res.status(200).json(reviews);
});

module.exports = router;
