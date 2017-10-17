import React, { Component } from "react";
import { render } from "react-dom";
import "../style/app.scss";
import keenImage from "../assets/imgs/sterlingarcher.jpg";

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
        <img src={keenImage} alt="Commander Keen" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById("app"));
