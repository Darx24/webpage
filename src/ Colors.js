import React from "react";
import blue from "./images/blue.png";
import green from "./images/green.png";
import red from "./images/red.png";

const colors = (props) => {
  <div>
    <h3>Blue</h3>
    return <img src={blue} alt="blue" />
    <p>
      {" "}
      Blue is the color of the sky and it is also often associated with depth
      and stability. It symbolizes trust, loyalty, wisdom and confidence.
    </p>
  </div>;
  <div>
    <h3>Green</h3>
    return <img src={green} alt="green" />
    <p>
      {" "}
      Green is the color of nature. It symbolizes growth, harmony, freshness and
      fertility. Green has strong emotional correspondence with safety.
    </p>
  </div>;
  <div>
    <h3>Red</h3>
    return <img src={red} alt="red" />
    <p>
      {" "}
      Red is the color of fire and blood, so it is associated with energy, war,
      danger, strength,power, determination as well as passion, desire and love.
    </p>
  </div>;
};
export default colors;
