import React from "react";

class VideoItem extends React.Component {
  render() {
    return (
      <>
        <iframe
          className="video"
          width="560"
          height="315"
          src={"https://www.youtube.com/embed/" + this.props.id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1>{this.props.videoTitle}</h1>
      </>
    );
  }
}
export default VideoItem;
