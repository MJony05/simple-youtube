import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./style.css";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <i className="bars icon large"></i>
          <img
            src="https://www.seekpng.com/png/full/77-772362_youtube-logo-youtube-logo-png.png"
            alt="youtube logo"
            className="logo-img"
          />
        </div>
        <SearchBar request={this.props.request} />
        <div className="settings">
          <i className="plus square outline icon large"></i>
          <i className="buromobelexperte icon large"></i>
          <i className="bell outline icon large"></i>
          {/* <i className="bell slash outline icon"></i> */}
          <i className="user circle outline icon large  "></i>
        </div>
      </div>
    );
  }
}
export default Header;
