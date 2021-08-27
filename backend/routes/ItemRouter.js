var express = require("express");
var router = express.Router();

var itemDao = require("../dao/item");

// GET current user details based on id (_W)
router.get("/item/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await itemDao.getItemById(id);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// POST create new item based on details (_W)
router.post("/item", async (req, res, next) => {
  var itemData = {
    address: req.body.address,
    username: req.body.username ? req.body.username : "",
    title: req.body.title,
    description: req.body.description,
    royalties: req.body.royalties,
    category: req.body.category,
    price: req.body.price,
  };

  try {
    const data = await itemDao.createItem(itemData);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// Public
// GET Items based on special category
router.get("/items/category/:category", async (req, res, next) => {
  console.log(req.params.category);
  try {
    const data = await itemDao.getItemsByCategory(req.params.category);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// GET current item details based on id (_W)
router.get("/items", async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await itemDao.getItems();
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// Public
// GET All Items
router.get("/item/category/:category", async (req, res, next) => {
  console.log(req.params.category);
  const param = req.params.category;
  const cat = param === "all" ? "" : param;
  try {
    const data = await itemDao.getAllItems(cat);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//Trending Item (Get recent Item)
router.get("/recent/", async (req, res, next) => {
  const id = req.params.id;

  try {
    const data = await itemDao.getItemByDate();
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

//Trending 3 Item (Get recent Item)
router.get("/top/", async (req, res, next) => {
  const category = req.params.category;

  try {
    const data = await itemDao.getRecentItem();
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});
module.exports = router;
