import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  // console.log(props);
  const { song } = props;

  return (
    <div>
      <h1>Song Detail</h1>
      {!song && <h3>Select a song</h3>}
      {song && (
        <h3>
          Title: {song.title}
          <br />
          Duration: {song.duration}
        </h3>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
