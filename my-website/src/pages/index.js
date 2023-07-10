import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DevelopmentCard from '../components/DevelopmentCard';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Showcase from '../components/Showcase'
import Footer from '../components/Footer';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>  
        {/* <InfoSection {...homeObjTwo}/>  
        <InfoSection {...homeObjThree}/>         */}
        <Showcase/>
        <Footer/>
      
      
    </>
  )
}

export default Home