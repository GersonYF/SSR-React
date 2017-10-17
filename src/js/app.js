import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./utils/reduxInit";
import { Map } from "immutable";
import Hello from "./components/Hello";

import "bootstrap/dist/css/bootstrap.css";
import "../style/app.scss";

const store = configureStore({});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Hello />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
