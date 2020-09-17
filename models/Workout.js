const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
    url: {type: String}
})
const workoutSchema = new Schema({
    id: {type: String, required: true},
    link: [subSchema]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;