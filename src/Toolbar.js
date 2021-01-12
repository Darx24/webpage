import React, { Component } from "react";
import Logo from "./images/logo.png";
import classes from "./toolbar.module.css";

class Toolbar extends Component {
  render() {
    return (
      <header>
        <div className={classes.Toolbar}>
          <img src={Logo} width="70px" height="70px" auto alt="logo" />
        </div>
        <div className={classes.text}>Blue Green Red</div>
      </header>
    );
  }
}

export default Toolbar;
