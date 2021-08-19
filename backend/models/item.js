var mongoose = require("mongoose");

var ItemModel = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
  currency: {
    type: String,
    required: true,
    default: "BNB",
  },

  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const Item = mongoose.model("Item", ItemModel, "Item");

module.exports = User;
