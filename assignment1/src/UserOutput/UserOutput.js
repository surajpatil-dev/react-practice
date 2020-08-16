import React, { Component } from "react";
import "./UserOutput.css";

class UserOutput extends Component {
  state = {};
  render() {
    return (
      <div className="UserOutput">
        <p>I am {this.props.name}.</p>
        <p>My username is {this.props.username}.</p>
      </div>
    );
  }
}

export default UserOutput;
