import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Root from './Root';
import RootState from './RootState';
ReactDOM.render(
  <Root rootState={new RootState()}/>,
  document.getElementById('root')
);
