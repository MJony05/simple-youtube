import React from "react";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/T3A6sTQEeeM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}
export default VideoDetail;
