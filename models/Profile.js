const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    questions: Array, 
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
