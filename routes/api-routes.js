const express = require("express");
const Axios = require("axios");
const auth = require("../middleware/auth");
const ProfileRouter = express.Router();

// load Profile model
const User = require("../models/User");
const Profile = require("../models/Profile");
// const {db} = require("../models/Video");
const Video = require("../models/Video");

// questions by user
ProfileRouter.get('/profile', auth, function(req, res) {
  // An empty find method will return all Posts
  User.findById(req.user)
    .select("profile video")
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
    age: req.body.age,
    genderClass: req.body.genderClass,
    height: req.body.height,
    weight: req.body.weight,
    activity: req.body.activity,
    bmi: req.body.bmi,
    bfp: req.body.bfp,
    bmiClass: req.body.bmiClass,
    bmr: req.body.bmr,
    tdee: req.body.tdee,
    imgUrl: req.body.imgUrl,
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

// ProfileRouter.post('/uservideo', (req, res) => {
//   db.Video.create({
//     id: req.body.id,
//     link: req.body.link,
//   }).then((result)=>res.send(result)).
//   catch((err)=>res.send(err));
// });

// making POST route with auth
ProfileRouter.post('/uservideo', auth, (req, res) => {
  const video = new Video({
    link: req.body.link,
  });
  const user = req.user;
  video.save((err, video) => {
    User.findById(user, (err, base) => {
      base.video.push(video);
      base.save((err, user) => {
        if (err) 
          return res.send(err);
        res.json(user);
      })
    })
  })
});
  
module.exports = ProfileRouter;
