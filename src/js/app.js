import React, { Component } from "react";
import { render } from "react-dom";
import { Alert } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../style/app.scss";
import archerImg from "../assets/imgs/sterlingarcher.jpg";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <Alert color="primary">Hello</Alert>
        <img src={archerImg} alt="Sterling Archer" />
        <i className="material-icons">accessibility</i>
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
