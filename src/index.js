import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'
import Primary from './pages/Primary'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import Routes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
