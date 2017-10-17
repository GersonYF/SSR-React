import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { Alert } from "reactstrap";

import archerImg from "../../assets/imgs/sterlingarcher.jpg";

export class Hello extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
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

const mapStateToProps = state => ({
  posts: state.posts_list
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
