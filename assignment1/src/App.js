import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import UserOutput from "./UserOutput/UserOutput";
import Userinput from "./UserInput/UserInput";

class App extends Component {
  state = {
    users: [
      {
        name: "Sj",
        username: "username_sj",
      },
      {
        name: "Rc",
        username: "username_rc",
      },
    ],
  };

  swapButtonHandler = () => {
    this.setState({ users: this.state.users.reverse() });
  };
  usernameChangeHandler = (event) => {
    let lusers = [...this.state.users];
    lusers[0].username = event.target.value;
    this.setState({
      users: lusers,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, This is my first react app.</h1>
        <hr />
        <Userinput
          username={this.state.users[0].username}
          changed={this.usernameChangeHandler}
        />
        <button className="btn btn-primary" onClick={this.swapButtonHandler}>
          Swap
        </button>
        <UserOutput
          name={this.state.users[0].name}
          username={this.state.users[0].username}
        />
        <UserOutput
          name={this.state.users[1].name}
          username={this.state.users[1].username}
        />
      </div>
    );
  }
}

export default App;
