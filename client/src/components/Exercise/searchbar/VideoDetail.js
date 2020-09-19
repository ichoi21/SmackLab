import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h3>Enter search keyword to load...</h3>
        <br></br>
        <p className="font15">Look for other workout videos!</p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="bg ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
