
import React, { useState } from 'react';
import LinearGradient from './components/LinearGradient';
import Accordion from './scenes/Accordion';
import Banner1 from './scenes/Banner1';
import Banner2 from './scenes/Banner2';
import Banner3 from './scenes/Banner3';
import Banner4 from './scenes/Banner4';
import Footer from './scenes/Footer';
import Landing from './scenes/Landing';
import Login from './scenes/Login';
import Navbar from './scenes/Navbar';
// import { Route, Routes } from 'react-router-dom';
// import { Login } from './pages';


function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {isClicked ? (
        <div className='lolo2 max-sm:bg-black'>
          <Login/>
        </div>
      )
        :
        
        (<div className='app' >
    <div className='lolo max-lg:h-[100vh] max-sm:h-[78vh]'>
        <Navbar isClicked={isClicked}
          setIsClicked={ setIsClicked} />
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
    </div >)}
    
   
          </div>
  );
}

export default App;
