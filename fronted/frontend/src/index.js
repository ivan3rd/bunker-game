import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RegestrationPanel} from './wrappers/util/reg-panel'
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
