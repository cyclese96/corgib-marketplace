var mongoose = require("mongoose");

var ItemModel = new mongoose.Schema({
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
  price: {
    type: String,
    required: true,
    default: "BNB",
  },
  royalties: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
const Item = mongoose.model("Item", ItemModel, "Item");

module.exports = Item;
