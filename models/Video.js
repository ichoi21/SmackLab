const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
    url : {type: String}
})

const VideoSchema = new Schema({
    link: [subSchema]
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;