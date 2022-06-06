const express = require("express");
const jwt = require("jsonwebtoken");

const userColl = require("./../Model/users");
const profileColl = require("./../Model/profile");
const { verifyAdmin } = require("./auth");

const router = express.Router();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "UnAuthorized access" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: "Forbidden access" });
    }
    req.decoded = decoded;

    next();
  });
};

router.put("/:user", async (req, res) => {
  const email = req.params.user;
  const user = await userColl.updateOne(
    { email: email },
    { $set: { email: email } },
    { upsert: true }
  );
  const jwtToken = jwt.sign({ email: email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(200).json({ sucess: true, token: jwtToken });
});

router.get("/:user", verifyJWT, verifyAdmin, async (req, res) => {
  const email = req.params.user;
  const data = await userColl.findOne({ email: email });
  const isAdmin = data.role === "admin";
  if (data.role !== "admin") {
    return res.send("user");
  }
  res.send({ admin: isAdmin });
});

router.get("/", async (req, res) => {
  const users = await userColl.find();
  res.status(200).json(users);
});
router.put("/admin/:user", verifyJWT, verifyAdmin, async (req, res) => {
  const email = req.params.user;
  const userAdmin = await userColl.updateOne(
    { email: email },
    { $set: { role: "admin" } },
    { upsert: true }
  );
  res.status(200).json(userAdmin);
});

router.post("/my-profile", verifyJWT, async (req, res) => {
  const addProfile = await profileColl.create(req.body);
  res.status(200).json({ success: true, addProfile });
});

router.get("/my-profile/:user", async (req, res) => {
  const email = req.params.user;
  const profile = await profileColl.findOne({ email: email });
  res.status(200).json({ success: true, profile });
});

module.exports = router;
