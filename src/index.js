import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

require('bootstrap-loader');

const json = require('./resume.json');

ReactDOM.render(
  <App jsonObj={json} />,
  document.getElementById('root')
);
