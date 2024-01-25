import React from 'react';
import { Navbar, Header, Brand, Programs, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Programs />
      {/*<Features />
      <Possibility />
      <CTA />
      <Blog /> */} 
      <Footer />
    </div>
  )
}

export default App
