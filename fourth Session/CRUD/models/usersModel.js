const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const modelUser = mongoose.model("users", userSchema);

module.exports = modelUser;


