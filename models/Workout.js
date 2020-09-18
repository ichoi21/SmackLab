const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    question: {type: String, required: true}, 
    answers: [String],
    content: {type: String, required:true},
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;