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
    this.state = { inputKey: "", data: {}, videoId: "" };
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
  showVideo = () => {
    if (this.state.videoId) {
      return (
        <div className="ui grid container">
          <div className="ui row">
            <div className="eight column wide">
              <VideoItem id={this.state.videoId} />
            </div>
            <div className="four column wide">
              <VideoList data={this.state.data} videoIdFunc={this.getVideoId} />
            </div>
          </div>
        </div>
      );
    } else {
      return <VideoList data={this.state.data} videoIdFunc={this.getVideoId} />;
    }
  };
  render() {
    return (
      <>
        <Header request={this.getData} />
        <div className="containerr">
          <div className="left-side">
            {" "}
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
