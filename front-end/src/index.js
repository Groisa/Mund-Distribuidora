import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
    <App />
    <ToastContainer/>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);