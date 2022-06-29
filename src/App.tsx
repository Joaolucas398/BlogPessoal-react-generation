import React from 'react';
import Navbar from './components/estaticos/navbar/navbar'
import Footer from './components/estaticos/footer/footer';

import Home from './pages/home/Home';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>

    </>
  );
}

export default App; 