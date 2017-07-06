import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

const json = require('./resume.json');

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
