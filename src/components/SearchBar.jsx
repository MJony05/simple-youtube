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
      <>
        <form
          onSubmit={this.onSubmit}
          className="ui search"
          style={{ width: "40%", margin: "0 auto" }}
        >
          <div className="ui icon input" style={{ width: "100%" }}>
            <div className="ui action input" style={{ width: "100%" }}>
              <input
                type="search"
                placeholder="Search..."
                className="search-input"
                onChange={this.onchangeInput}
              />
              <button className="ui button">
                <i className="search icon"></i>
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default SearchBar;
