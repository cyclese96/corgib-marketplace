const { request, json } = require("express");
const { RequestTimeout } = require("http-errors");
var UserModel = require("../models/user");

const limit = 15;

const userDao = {
  async getUserByAddress(username) {
    return await UserModel.findOne({ username });
  },

  async createUser(userData) {
    let userCount = await UserModel.find({
      $or: [{ username: userData.username }, { address: userData.address }],
    }).countDocuments();
    if (userCount === 0) {
      await UserModel.insertMany([userData]);
    }

    return await UserModel.findOne({
      user: userData.username,
      address: userData.address,
    });
  },
};

module.exports = userDao;
