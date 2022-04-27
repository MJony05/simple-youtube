import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar.jsx";
import VideoList from "./VideoList.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputKey: "", data: {} };
  }
  getData = async (keyword) => {
    const key = "AIzaSyBvspp_ZO7k6U5beNCEpPmZ3Y_sTkDM-7Q";
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
    console.log(data);
  };
  render() {
    return (
      <div>
        <SearchBar request={this.getData} />
        <VideoList data={this.state.data} />
      </div>
    );
  }
}
export default App;
