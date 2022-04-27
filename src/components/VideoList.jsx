import React from "react";
import VideoDetails from "./VideoDetail";
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      return (
        <div key={val.id.videoId} className="card-video">
          <VideoDetails val={val} />
        </div>
      );
    });
  };
  render() {
    return <div className="video-list">{this.renderList()}</div>;
  }
}
export default VideoList;
