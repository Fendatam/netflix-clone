
import React from 'react';
import LinearGradient from './components/LinearGradient';
import Accordion from './scenes/Accordion';
import Banner1 from './scenes/Banner1';
import Banner2 from './scenes/Banner2';
import Banner3 from './scenes/Banner3';
import Banner4 from './scenes/Banner4';
import Footer from './scenes/Footer';
import Landing from './scenes/Landing';
import Navbar from './scenes/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import { Login } from './pages';


function App() {
  return (
    <div className='app'>
    <div className='lolo'>
      <Navbar />
      <Landing />
    </div>
      <LinearGradient />
      <div className='bg-black'>
        <Banner1/>
      </div>
      <LinearGradient />
            <div className='bg-black'>
        <Banner2/>
      </div>
            <LinearGradient />
            <div className='bg-black'>
        <Banner3/>
      </div>
            <LinearGradient />
            <div className='bg-black'>
        <Banner4/>
      </div>
      <LinearGradient />
      <div className='bg-black'>
      <Accordion/>
      </div>
      <LinearGradient />
      <div className='bg-black'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
