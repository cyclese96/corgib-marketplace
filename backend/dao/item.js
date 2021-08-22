var ItemModel = require("../models/item");

const limit = 15;

const itemDao = {
  async getItemById(id) {
    return await ItemModel.findById(id);
  },

  async createItem(itemData) {
    let itemCount = await ItemModel.find({
      address: itemData.address,
    }).countDocuments();
    if (itemCount === 0) {
      await ItemModel.insertMany([itemData]);
    }

    return await ItemModel.findOne({
      address: itemData.address,
    });
  },
};

module.exports = itemDao;
