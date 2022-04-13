import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import "bootstrap-icons/font/bootstrap-icons.css";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);