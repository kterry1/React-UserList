import React from "react";
import ReactDOM from "react-dom";
import AddUser from "./Components/AddUser";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AddUser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
