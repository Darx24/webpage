import React, { Component } from "react";
import Toolbar from "./Toolbar";
import Body from "./bottom";
import bottom from "./bottom";
import { render } from "@testing-library/react";
import Aux from "./aux";
import classes from "./page.module.css";

var page = (props) => {
  <Aux>
    <div>
      <toolbar></toolbar>
      <body></body>
    </div>
    <main className={classes.Content}>
      {props.children}
      <body></body>
    </main>
    <bottom></bottom>
  </Aux>;
};

export default page;
