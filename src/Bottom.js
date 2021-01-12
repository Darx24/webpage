import React, { Component } from "react";
import classes from "./bottom.module.css";
import blue from "./images/blue.png";
import Aux from "./Aux";
import green from "./images/green.png";
import red from "./images/red.png";

class bottom extends Component {
  render() {
    return (
      <Aux>
        <div className={classes.Modal}>
          <h3>Blue</h3>
          <img src={blue} alt="blue" />
          <p>
            {" "}
            Blue is the color of the sky and it is also often associated with
            depth and stability. It symbolizes trust, loyalty, wisdom and
            confidence.
          </p>
        </div>
        <div className={classes.green}>
          <h3>Green</h3>
          <img src={green} alt="green" />
          <p>
            {" "}
            Green is the color of nature. It symbolizes growth, harmony,
            freshness and fertility. Green has strong emotional correspondence
            with safety.
          </p>
        </div>
        <div className={classes.red}>
          <h3>Red</h3>
          <img src={red} alt="red" />
          <p>
            {" "}
            Red is the color of fire and blood, so it is associated with energy,
            war, danger, strength,power, determination as well as passion,
            desire and love.
          </p>
        </div>
      </Aux>
    );
  }
}
export default bottom;
