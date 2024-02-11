import React from 'react';
import { Navbar, Footer } from './components';
import './App.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes }from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CodingClubs from './pages/CodingClubs';
import RoboticsClubs from './pages/RoboticsClubs';
import RoboticsKit from './pages/RoboticsKit';
import SummerCamps from './pages/SummerCamps';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/About' exact element={<About />} />
        <Route path='/CodingClubs' element={<CodingClubs />} />
        <Route path='/RoboticsClubs' element={<RoboticsClubs />} />
        <Route path='/RoboticsKit' element={<RoboticsKit />} />
        <Route path='/SummerCamps' element={<SummerCamps />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App