import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app.jsx';
import store from './store';
import '../dist/assets/style.css';


ReactDOM.render(
// wrap the App in the Provider and pass in the store
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
