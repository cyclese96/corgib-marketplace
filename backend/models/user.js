var mongoose = require("mongoose");

var UserModel = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  avatar: {
    type: String,
  },
  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const User = mongoose.model("User", UserModel, "User");

module.exports = User;
