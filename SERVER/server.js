////!Ordered Template-->

const dotenv = require("dotenv");
dotenv.config();

////--------------------------------------
//!Imports--->
const express = require("express");
const cors = require("cors");
require("../DB/index");
const workerRouter = require("../routes/worker-route");
const userRouter = require("../routes/user-route");
const passport = require("passport");
require("../config/passport")(passport);

const port = process.env.PORT || 8000;

const app = express();
////--------------------------------------
//!Uses-->
app.use(express.json());
app.use(cors());

////--------------------------------------
///!SERVER UP -->
app.listen(port, () => {
  console.log(`SERVER IS UP! on PORT: ${port}`);
});

////--------------------------------------
///!SERVER HTTPs & Routes-->

app.get("/", (req, res) => {
  res.send("WELLCOME TO THE OFFICE.");
});
app.use(passport.initialize());
app.use("/workers", passport.authenticate('jwt',{session : false}),workerRouter);
app.use("/users", userRouter);

///!_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
///!_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
///!_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
///!_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
///!
