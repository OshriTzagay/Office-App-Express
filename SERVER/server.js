const dotenv = require("dotenv");
dotenv.config();

////--------------------------------------
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

////--------------------------------------
const workerRouter = require("../routes/worker-route");

////--------------------------------------
//!Uses-->
app.use(cors());
app.use(express.json());
app.use("/workers", workerRouter);

////--------------------------------------

app.get("/", (req, res) => {
  res.send("WELLCOME TO THE OFFICE.");
});


app.listen(port, () => {
  console.log("SERVER IS UP!");
});
