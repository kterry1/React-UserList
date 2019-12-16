import React from "react";

function UserList(props) {
  return (
    <ul>
      {props.users.map((user, index) => (
        <li key={index}>
          Username: {user}
          <span>{props.toggle ? "-----------------" : "Games Played: 0"}</span>
          <button
            onClick={() => props.removeUser(user)}
            className="deleteButton"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
