import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import UserOutput from "./UserOutput/UserOutput";
import Userinput from "./UserInput/UserInput";

class App extends Component {
  style = {
    textAlign: "left",
  };
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
        <h1>This is my first react app made for the first assignment.</h1>
        <div style={this.style}>
          <h4 style={this.style}>Q. The instructions are: </h4>
          <ul>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>
              UserInput should hold an input element, UserOutput two paragraphs
            </li>
            <li>
              Output multiple UserOutput components in the App component (any
              paragraph texts of your choice)
            </li>
            <li>
              Pass a username (of your choice) to UserOutput via props and
              display it there
            </li>
            <li>
              Add state to the App component (=> the username) and pass the
              username to the UserOutput component
            </li>
            <li>
              Add a method to manipulate the state (=> an event-handler method)
            </li>
            <li>
              Pass the event-handler method reference to the UserInput component
              and bind it to the input-change event
            </li>
            <li>
              Ensure that the new input entered by the user overwrites the old
              username passed to UserOutput
            </li>
            <li>
              Add two-way-binding to your input (in UserInput) to also display
              the starting username
            </li>
            <li>
              Add styling of your choice to your components/ elements in the
              components - both with inline styles and stylesheets
            </li>
          </ul>
        </div>
        <hr />
        <h1 style={this.style}>Solution -</h1>
        <div class="solution">
          <Userinput
            username={this.state.users[0].username}
            changed={this.usernameChangeHandler}
          />

          <UserOutput
            name={this.state.users[0].name}
            username={this.state.users[0].username}
          />
          <UserOutput
            name={this.state.users[1].name}
            username={this.state.users[1].username}
          />
          <button className="btn btn-primary" onClick={this.swapButtonHandler}>
            Swap
          </button>
        </div>
      </div>
    );
  }
}

export default App;
