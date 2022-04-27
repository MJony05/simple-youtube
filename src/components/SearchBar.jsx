import React from "react";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onchangeInput = (event) => {
    this.setState({ keyword: event.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.request(this.state.keyword);
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          className="ui search"
          style={{ width: "80%", margin: "1rem auto" }}
        >
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.onchangeInput}
              className="prompt"
              style={{ width: "100%" }}
              type="text"
              placeholder="Search videos..."
            />
            <i className="search icon"></i>
          </div>
        </form>
        <div className="result">{this.state.keyword}</div>
      </div>
    );
  }
}
export default SearchBar;
