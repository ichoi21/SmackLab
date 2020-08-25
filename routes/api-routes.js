const express = require("express");
const router = express.Router();

router.get("/example", (req, res) => {
    res.send("message from back end: success");
  });

  module.exports = router;