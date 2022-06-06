const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const productRoute = require("./Route/products-route");
const orderRoute = require("./Route/order-route");
const userRoute = require("./Route/user-route");
const reviewRoute = require("./Route/review-route");
const morgan = require("morgan");

const app = express();
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.3kcd3.mongodb.net/TechpcDB`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    }
  )
  .then(() => console.log("Connect established with MongoDB"));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/user", userRoute);
app.use("/api/review", reviewRoute);

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send("Backend Server is running");
});

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
