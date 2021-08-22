var express = require("express");
var router = express.Router();

var UserDao = require("../dao/item");

// GET current user details based on id
router.get("/item/:id", async (req, res, next) => {
  const Id = req.params.id;

  try {
    const data = await UserDao.getItemById(Id);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// POST create new item based on details
router.post("/item", async (req, res, next) => {
  var itemData = {
    address: req.body.address,
    username: req.body.username ? req.body.username : "",
  };

  try {
    const data = await UserDao.createItem(itemData);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});
module.exports = router;
