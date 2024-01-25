import React from 'react';
import { Navbar, Footer } from './components';
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App