import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
// import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NameTag from './components/NameTag';
// import MatrixRain from './components/MatrixRain';
// import Typewriter from 'typewriter-effect';

// import ShowcaseLanguages from './components/ShowcaseLanguages';
import Home from './pages';
// import Footer from '. /components/Footer'


function App() {
  return (

    <Router>
      <Home/>
    </Router>
    // <>

      
    //   {/* <NameTag/> */}
    //   {/* <div>
    //     <MatrixRain/>
    //   </div> */}
      
    //       {/* <ShowcaseLanguages/> */}


    //   {/* <Router> */}
    //     {/* <Navbar /> */}
    //     {/* <Routes> */}
    //       {/* <Route path='/' element={<Home/>} />
    //       <Route path='/services' element={<Services/>} />
    //       <Route path='/sign-up' element={<SignUp/>} />
    //       <Route path='/producs' element={<Products/>} /> */}
    //     {/* </Routes> */}
    //     {/* <Footer/> */}
    //   {/* </Router> */}
    // </>
  );
}

export default App;