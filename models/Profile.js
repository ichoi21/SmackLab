const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    question: {type: String, required: true}, 
    answers: [String],
    content: {type: String, required:true},

});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
