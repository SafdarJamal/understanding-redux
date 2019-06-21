import jsonPlaceholder from '../apis/jsonPlaceholder';

const fetchPost = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: 'FETCH_POST',
    payload: response
  });
};

export { fetchPost };
