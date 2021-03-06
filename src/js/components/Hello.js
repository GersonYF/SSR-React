import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import archerImg from "../../assets/imgs/sterlingarcher.jpg";

export class Hello extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <img src={archerImg} alt="Sterling Archer" />
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
