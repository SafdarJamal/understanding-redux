import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Wesa Beta',
      duration: '5:00'
    },
    {
      title: 'Salgirah',
      duration: '3:12'
    },
    {
      title: 'Lose Yourself',
      duration: '5:20'
    },
    {
      title: 'Beech Ki Ungli',
      duration: '3:48'
    },
    {
      title: 'Killshot',
      duration: '4:47'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
