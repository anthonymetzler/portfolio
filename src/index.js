import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './layouts/Resume';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));

registerServiceWorker();
