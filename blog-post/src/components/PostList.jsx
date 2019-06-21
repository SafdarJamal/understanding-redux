import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends Component {
  componentDidMount() {
    console.log(this.props.fetchPost());
  }
  render() {
    return (
      <div>
        <h1>PostList</h1>
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchPost
  }
)(PostList);
