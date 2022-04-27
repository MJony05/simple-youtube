import React from "react";
class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videoData: [] };
  }

  renderList = () => {
    return this.props.data.data?.items.map((val) => {
      console.log(val.snippet.thumbnails.high.url);
      return (
        <div>
          <img src={val.snippet.thumbnails.default.url}></img>
        </div>
      );
    });
  };
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default VideoList;
