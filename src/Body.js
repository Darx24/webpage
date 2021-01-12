import React, { Component } from "react";
import classes from "./body.module.css";

class Body extends Component {
  render() {
    return (
      <header className={classes.Body}>
        <div className={classes.love}>
          <p style={{ fontSize: "50px" }}>I Love Color</p>
          <p>
            Color really isn't that difficult to get right, if you know where to
            start.
          </p>
          <p>Learn by doing and you'll be a master in no time.</p>
        </div>
        <button style={{ padding: "10px" }}>Over to you</button>
      </header>
    );
  }
}

export default Body;
