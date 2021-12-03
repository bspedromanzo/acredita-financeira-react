import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css'
import Primary from './pages/Primary'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Primary />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
