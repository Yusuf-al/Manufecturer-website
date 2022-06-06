const express = require("express");

const reviewColl = require("../Model/review");

const router = express.Router();

router.get("/", async (req, res) => {
  const allreview = await reviewColl.find();
  res.status(200).json(allreview);
});

module.exports = router;
