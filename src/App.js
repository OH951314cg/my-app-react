import React, { Component } from "react";
import "./App.css";

import "rsuite/dist/styles/rsuite-default.css";
import NavBar from "./components/navbar/Navbar";
import Introduction from "./components/main/Introduction"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Introduction/>
      </div>
    );
  }
}

export default App;
