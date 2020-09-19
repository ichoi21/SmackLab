import React from "react";
import logo from "../../img/logo2.png";
import "../../Pages/Styles.css";

class Searchbar extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>
          <img
            style={{
              width: "100px",
              height: "auto",
              justifyContent: "center",
            }}
            src={logo}
            alt="smacklab logo"
          />
        </h2>
        <div className="search-bar">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field container">
              <input
                onChange={this.handleChange}
                name="video-search"
                type="text"
                placeholder="Workout Search.."
                label="Workout Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Searchbar;
