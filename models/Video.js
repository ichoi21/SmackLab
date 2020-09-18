const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
    url : {type: String}
})

const VideoSchema = new Schema({
    id: {type: String, required: true}, 
    link: [subSchema]
});

const Video = mongoose.model("Video", VideoSchema);

module.exports = Video;