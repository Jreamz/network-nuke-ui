import React, { Component } from "react";
import logo from "./logo.svg";
import MineSiteCards, { CardGenerator } from "./DashBoard";

class App extends Component {
  render() {
    return (
      <div>
        <CardGenerator />
      </div>
    );
  }
}

export default App;
