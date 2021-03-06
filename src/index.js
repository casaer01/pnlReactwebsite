import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Topnavbar from './components/TopNavbar/Topnavbar';
// import Slideshow from './components/sildeshow/Slideshow';
// import AboutPNL from './components/AboutPNL/AboutPNL';
// import FooterPNL from './components/footerPNL/footerPNL';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
