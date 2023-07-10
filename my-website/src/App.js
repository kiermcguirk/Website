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
import Cv from './pages/cv';
import Thesis from './pages/thesis';
// import Footer from '. /components/Footer'


function App() {
  return (

    <Router basename="/Website">
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/cv" element={<Cv/>}/>
        <Route path="/thesis" element={<Thesis/>}/>        
      </Routes>
      
      {/* <Route path="/" element={<Home />} exact /> <Route path="/signin" element={<SigninPage />} exact /> */}
      {/* <Home/> */}
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