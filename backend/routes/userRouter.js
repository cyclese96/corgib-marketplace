var express = require("express");
var router = express.Router();

var UserDao = require("../dao/user");

// GET current user details based on Address
router.get("/user/:username", async (req, res, next) => {
  const userName = req.params.username;

  try {
    const data = await UserDao.getUserByAddress(userName);

    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// POST create new user based on details
router.post("/user", async (req, res, next) => {
  var userData = {
    address: req.body.address,
    username: req.body.username ? req.body.username : "",
  };

  try {
    const data = await UserDao.createUser(userData);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
    return res.status(400).send("error");
  }
});

// PATCH update user details based on data
// router.patch("/user/username", async (req, res, next) => {
//   var userData = {
//     username: req.body.username ? req.body.username : "",
//     address: req.body.address,
//   };

//   try {
//     const data = await UserDao.updateUsername(userData);
//     return res.status(200).send(data);
//   } catch (error) {
//     return res.status(400).send("error");
//   }
// });
module.exports = router;
