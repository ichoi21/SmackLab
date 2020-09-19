const express = require("express");
const Axios = require("axios");
const auth = require("../middleware/auth");
const ProfileRouter = express.Router();

// load Profile model
const User = require("../models/User");
const Profile = require("../models/Profile");
// <<<<<<< master
// const Video = require("../models/Video");
// =======
// const { db } = require("../models/Video");
// >>>>>>> master

// questions by user
ProfileRouter.get("/profile", auth, function (req, res) {
  // An empty find method will return all Posts
  User.findById(req.user)
    .select("profile video")
    .populate("profile")

    // .exec((err, user) => {
    //   console.log("POPULATED" + user);
    //   res.json(user);
    // });
    .then((user) => {
      console.log(user);
      return res.json(user);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ msg: "db err" });
    });
});

ProfileRouter.post("/profile/populate", auth, async (req, res) => {
  const profile = new Profile({
    user: req.user,
    answers: req.body.answers,
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
        if (err) return res.send(err);
        res.json(user);
      });
    });
  });
});

// <<<<<<< master
// // making POST route with auth
// ProfileRouter.post('/profile/uservideo', auth, async (req, res) => {
//   const video = new Video({
//     link: req.body.link,
//   });
//   const user = req.user;
//   video.save((err, video) => {
//     User.findById(user, (err, base) => {
//       base.video.push(video);
//       base.save((err, user) => {
//         if (err)
//           return res.send(err);
//         res.json(user);
//       })
//     })
//   })
// });

// =======
// ProfileRouter.post("/uservideo", (req, res) => {
//   db.Video.create({
//     id: req.body.id,
//     link: req.body.link,
//   })
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// });

// >>>>>>> master
module.exports = ProfileRouter;
