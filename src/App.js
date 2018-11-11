import React, { Component } from "react";
import logo from "./logo.svg";
import { CardGenerator, SiteNavbar } from "./DashBoard";

class App extends Component {
  render() {
    return (
      <div>
        <SiteNavbar />
        <div className="dashboard-container">
          <CardGenerator />
        </div>
      </div>
    );
  }
}

export default App;
