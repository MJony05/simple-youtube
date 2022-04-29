import axios from "axios";
import React from "react";
import VideoList from "./VideoList.jsx";
import Header from "./Header.jsx";
import "./style.css";
import MenuBar from "./leftMenu.jsx";

import VideoItem from "./VideoItem.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", data: {}, videoId: "", videoName: "" };
  }
  getData = async (keyword) => {
    const key = "AIzaSyClobijxzPHFmV--Necjm9iFgrbJGeFk-c";
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          q: keyword,
          key: key,
        },
      }
    );
    this.setState({ data: data });
  };
  getVideoId = (id) => {
    this.setState({ videoId: id });
  };
  getInfoVideo = (nameVideo) => {
    this.setState({ videoName: nameVideo });
  };
  showVideo = () => {
    if (this.state.videoId) {
      return (
        <div className="video-container">
          <div className="video-big">
            <VideoItem
              id={this.state.videoId}
              videoTitle={this.state.videoName}
            />
          </div>
          <div className="after-search">
            <VideoList
              data={this.state.data}
              videoIdFunc={this.getVideoId}
              getVideoName={this.getInfoVideo}
            />
          </div>
        </div>
      );
    } else {
      return (
        <VideoList
          data={this.state.data}
          videoIdFunc={this.getVideoId}
          getVideoName={this.getInfoVideo}
        />
      );
    }
  };
  render() {
    return (
      <>
        <Header request={this.getData} />
        <div className="containerr">
          <div className="left-side">
            <MenuBar />
          </div>

          {/* <VideoItem id={this.state.videoId} /> */}
          {this.showVideo()}
        </div>
      </>
    );
  }
}
export default App;
