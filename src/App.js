import React, { Component } from "react";
import classes from "./App.module.css";
import Bottom from "./Bottom";
import Toolbar from "./Toolbar";
//import Page from "./page";
import Aux from "./Aux";
import Body from "./Body";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Body />
        <Bottom />
      </Aux>
    );
  }
}

export default App;
