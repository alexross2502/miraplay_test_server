const express = require("express");
const app = express();
const PORT = process.env.PORT || 3306;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

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
