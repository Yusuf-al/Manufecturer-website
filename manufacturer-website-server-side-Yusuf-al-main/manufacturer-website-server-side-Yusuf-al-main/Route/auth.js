const userColl = require("./../Model/users");
const jwt = require("jsonwebtoken");

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
const verifyAdmin = async (req, res, next) => {
  const userEmail = req.decoded.email;
  const userData = await userColl.findOne({ email: userEmail });
  if (userData.role === "admin") {
    next();
  } else {
    res.status(403).send({ message: "forbidden" });
  }
};

module.exports = {
  verifyJWT,
  verifyAdmin,
};
