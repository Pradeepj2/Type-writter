import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './store/reducer/Index';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
const store = createStore(allReducer , composeWithDevTools())
ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <BrowserRouter>
        <App />
  </BrowserRouter>     
   </Provider>      
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
