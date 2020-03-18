import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <div key={song.title}>
        <h3>
          {song.title}
          <br />
          <button onClick={() => this.props.selectSong(song)}>Select</button>
          <hr />
        </h3>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Song List</h1>
        <hr />
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
