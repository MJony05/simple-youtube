import React from "react";

class VideoItem extends React.Component {
  render() {
    return (
      <iframe
        width="400"
        height="300"
        src={"https://www.youtube.com/embed/" + this.props.id}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  }
}
export default VideoItem;
