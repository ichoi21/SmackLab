const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: {type: String, required: true}, 
    answers: [String],
    content: {type: String, required:true}
});

const Quiz = mongoose.model("User", UserSchema);

module.exports = Quiz;
