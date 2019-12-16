import React, { Component } from "react";
import "../CompStyle/AddUser.css";
import ToggleGames from "./ToggleGames";

class AddUser extends Component {
  state = {
    fName: "",
    lName: "",
    value: "",
    users: []
  };

  adding = event => {
    event.preventDefault();
    this.setState(prevState => ({
      users: [...prevState.users, this.state.value]
    }));
    this.clearFields();
  };

  handleChangeValue = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleChangefName = event => {
    this.setState({
      fName: event.target.value
    });
  };

  handleChangelName = event => {
    this.setState({
      lName: event.target.value
    });
  };

  removeUser = remove => {
    this.setState(prevState => ({
      users: prevState.users.filter(user => {
        return user !== remove;
      })
    }));
  };

  clearFields = () => {
    this.setState(() => ({
      fName: "",
      lName: "",
      value: ""
    }));
  };

  render() {
    const { users, value, fName, lName } = this.state;
    const {
      handleChangeValue,
      handleChangefName,
      handleChangelName,
      adding,
      removeUser
    } = this;
    return (
      <div>
        <h1>Sign Up To Be Added To The List</h1>
        <form onSubmit={adding}>
          <input
            name="first"
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={handleChangefName}
          />
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={handleChangelName}
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            maxLength="10"
            value={value}
            onChange={handleChangeValue}
          />
          <button
            type="submit"
            value="Add User"
            className="largeButton"
            disabled={
              users.includes(value) ||
              (value === "" || fName === "" || lName === "")
            }
          >
            Add User
          </button>
        </form>
        <div />
        <div>
          {users.includes(value) ? (
            <p>Sorry, that username has already been created!</p>
          ) : null}
        </div>
        <hr />
        <ToggleGames users={users} removeUser={removeUser} />
      </div>
    );
  }
}

export default AddUser;
