const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    questions: Array,
    age: Number,
    genderClass: String,
    height: Number,
    weight: Number,
    activity: Number,
    bmi: Number,
    bfp: Number,
    bmiClass: String,
    bmr: Number,
    tdee: Number,
    imgUrl: String,
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
