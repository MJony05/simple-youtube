import React from "react";

class MenuBar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="menu__icons">
          <div className="menu__item">
            <i className="home icon"></i>
            <p className="menu__item--info">Home</p>
          </div>
          <div className="menu__item">
            <i className="compass outline icon"></i>
            <p className="menu__item--info">Navigator</p>
          </div>
          <div className="menu__item">
            <i className="play circle outline icon"></i>
            <p className="menu__item--info">Shorts</p>
          </div>
          <div className="menu__item">
            <i className="folder open outline icon"></i>
            <p className="menu__item--info">Folders</p>
          </div>
          <div className="menu__item">
            <i className="history icon"></i>
            <p className="menu__item--info">Library</p>
          </div>
        </div>
      </>
    );
  }
}

export default MenuBar;
