const mongoose = require("mongoose");
// const schema = mongoose.Schema; //--> Another Option -> Shortcut .
const Worker = new mongoose.Schema( //--const Worker = new schema({})
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
  },
  { timestamps: true } //--> Shows when obj was created , and when he was UPDATED .
);

module.exports = mongoose.model("Worker", Worker); // Building An Collection Of Workers , With The SCHEMA We Gave.
