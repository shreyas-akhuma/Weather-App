import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Week from './components/week';

ReactDOM.render(
  <React.StrictMode>
    <Week/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();