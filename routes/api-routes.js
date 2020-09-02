const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/example", (req, res) => {
  res.send("message from back end: success");
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/', 'index.html'));
});


router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/', 'signup.html'));
});

  module.exports = router;