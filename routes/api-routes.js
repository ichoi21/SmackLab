const express = require("express").Router();
const Axios = require("axios");
const auth = require("../middleware/auth");
const router = express.Router();
const path = require("path");
const db = require("../models");

router.get("/example", (req, res) => {
  res.send("message from back end: success");
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/", "index.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/", "signup.html"));
});

router.post("/signup", (req, res) => {
  db.User.create({
    first_name: req.body.first,
    last_name: req.body.last,
    email: req.body.email,
    password: req.body.password,
  })
    .then(function (dbUser) {
      res.send(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get('/user/',(req,res) => {
  db.User.find({ id: req.body.id}).then((result) => {res.send(result)})
  .catch((err) =>res.send(err));
})

// router.post('/userinfo/:id',(req,res)=>{
//   db.Workout.create({
//     id: req.params.id,
//     link: req.body.link,
//   }).then((workout)=>{
//     res.send(workout);
//   }).catch((err)=>{
//     res.json(err);
//   })
// });

module.exports = router;
