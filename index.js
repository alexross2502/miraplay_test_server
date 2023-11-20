const express = require("express");
const app = express();
const PORT = process.env.PORT || 3306;
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./routes");

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(`db connection error: ${err}`));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "working" });
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log("start", PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
