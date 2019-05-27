import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  username: 'Freya Coursey',
  totalAmount: 24000
};

const store = createStore(reducer, initialState);

export { store };
