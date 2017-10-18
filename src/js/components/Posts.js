import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

export class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(p => {
          return (
            <div key={p.get("id")}>
              <i className="material-icons">link</i>
              <span>{p.get("title").get("rendered")}</span>
            </div>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
