import React, { Component } from "react";
import "./UserInput.css";

class Userinput extends Component {
  style = {
    padding: "10px",
  };
  state = {};
  render() {
    return (
      <div style={this.style} className="UserInput">
        Username :{" "}
        <input
          type="text"
          value={this.props.username}
          placeholder="Enter Username"
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Userinput;
