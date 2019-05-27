import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';

const render = () => {
  // console.log('Rendering App');
  ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
