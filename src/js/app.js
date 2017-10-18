import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./utils/reduxInit";
import { Map } from "immutable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Hello from "./components/Hello";
import Posts from "./components/Posts";

import "bootstrap/dist/css/bootstrap.css";
import "../style/app.scss";

const store = configureStore({});

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="TopBar">
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
            </div>
            <Route exact path="/" component={Hello} />
            <Route path="/posts" component={Posts} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
