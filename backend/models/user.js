var mongoose = require("mongoose");

var UserModel = new mongoose.Schema({
  username: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const User = mongoose.model("User", UserModel, "User");

module.exports = User;
