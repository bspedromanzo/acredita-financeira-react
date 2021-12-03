import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Primary from './pages/Primary'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'

function Rotas() {
  return (
    <Router>
      <NavBar />
      <Primary />
      <Footer />
    </Router>
  )
}

export default Rotas
