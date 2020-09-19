const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    link: String,
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;