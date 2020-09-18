const express = require("express");
const Axios = require("axios");
const auth = require("../middleware/auth");
const ProfileRouter = express.Router();

// load Profile model
const User = require("../models/User");
const Profile = require("../models/Profile");

// questions by user
ProfileRouter.get('/profile', auth, function(req, res) {
  // An empty find method will return all Posts
  User.findById(req.user)
    .select("profile workout")
    .populate("profile")
    .exec((err, user) => {
      console.log("POPULATED" + user);
      res.json(user);
    });
});

ProfileRouter.post("/profile/populate", auth, async (req, res) => {
  const profile = new Profile({
    user: req.user,
    questions: req.body.questions,
  });
  const user = req.user;
  profile.save((err, profile) => {
    User.findById(user, (err, base) => {
      base.profile.push(profile);
      base.save((err, user) => {
        if (err)
          return res.send(err);
        res.json(user);
      })
    })
  });
});
  
module.exports = ProfileRouter;
