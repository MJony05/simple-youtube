import axios from "axios";
import React from "react";
class VideoDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyChanel: this.props.val.snippet.channelId,
      chanelImage: "",
      videoId: "",
    };
    this.getChanel();
  }
  getChanel = async () => {
    const key = "AIzaSyBvspp_ZO7k6U5beNCEpPmZ3Y_sTkDM-7Q";
    const chanel = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet",
          id: this.state.keyChanel,
          key: key,
        },
      }
    );
    this.setState({
      chanelImage: chanel.data.items[0].snippet.thumbnails.medium.url,
    });
  };
  getIdClick = () => {
    this.setState({ videoId: this.props.val.id.videoId });
    console.log(this.state.videoId);
  };
  render() {
    return (
      <>
        <div className="video-image">
          <img
            className="video-image"
            src={this.props.val.snippet.thumbnails.medium.url}
          ></img>
        </div>

        <div className="video-info">
          <h3 onClick={this.getIdClick} className="video-title">
            {this.props.val.snippet.title}
          </h3>
          <p className="video-time">
            {this.props.val.snippet.publishTime.split("").map((el) => {
              if (el === "T" || el === "Z") return " ";
              else return el;
            })}
          </p>
          <p className="video-chanel">
            <img src={this.state.chanelImage} alt="" className="chanel-image" />{" "}
            {this.props.val.snippet.channelTitle}
          </p>
          <p className="video-desc">{this.props.val.snippet.description}</p>
        </div>
      </>
    );
  }
}
export default VideoDetails;
/** */
/** */
/**
channelId: "UC1ooLVWqFW-UH5xmUYW0xgA"
channelTitle: "Football News"
description: "THAT'S WHAT HAPPENED between DE JONG and XAVI after the substitution in the BARCELONA RAYO match! At last we have ..."
liveBroadcastContent: "none"
publishTime: "2022-04-25T13:45:32Z"
publishedAt: "2022-04-25T13:45:32Z"
thumbnails:
default: {url: 'https://i.ytimg.com/vi/uGAePBUCFmc/default.jpg', width: 120, height: 90}
high: {url: 'https://i.ytimg.com/vi/uGAePBUCFmc/hqdefault.jpg', width: 480, height: 360}
medium: {url: 'https://i.ytimg.com/vi/uGAePBUCFmc/mqdefault.jpg', width: 320, height: 180}
[[Prototype]]: Object
title: "THAT&#39;S WHAT HAPPENED between DE JONG and XAVI after the substitution in the BARCELONA RAYO match!"
 */
