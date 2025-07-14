const express = require("express");
const cors = require("cors");
const connect = require("./config/connection");
const router = require("./routes/index");

require("dotenv").config();
const app = express();
connect();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "DELETE", "PUT", "OPTIONS"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", router);
app.use("/view-img", express.static("src/uploads"));

app.use("/", (req, res) => {
  res.send("I'm Alive");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
