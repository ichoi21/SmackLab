const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  answers: Array,
  age: Number,
  genderClass: { type: String, default: "" },
  height: Number,
  weight: Number,
  activity: Number,
  bmi: Number,
  bfp: Number,
  bmiClass: String,
  bmr: Number,
  tdee: Number,
  imgUrl: { type: String, default: "" },
  fitnessGoal: { type: String, default: "" },
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
