import React, { Component } from "react";
import UserList from "./UserList";

class ToggleGames extends Component {
  state = {
    toggle: true
  };
  toggleState = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  };

  render() {
    const { toggle } = this.state;
    const { users, removeUser } = this.props;
    const { toggleState } = this;
    return (
      <div>
        <button onClick={toggleState} className="toggleButton">
          {toggle ? "Show # of Games" : "Hide # of Games"}
        </button>
        <div>
          <UserList users={users} toggle={toggle} removeUser={removeUser} />
        </div>
      </div>
    );
  }
}

export default ToggleGames;
