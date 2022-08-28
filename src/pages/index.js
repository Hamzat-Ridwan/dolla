import React, {useState} from 'react'
import Footer from '../components/Footer/index.js'
import HeroSection from '../components/HeroSection.js'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data.js'
import InfoSection from '../components/infoSection/index.js'
import Navbar from '../components/Navbar'
import Services from '../components/Services/index.js'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <Sidebar isOpen={isOpen} toggle ={toggle} />
    <Navbar toggle={toggle} />
    <HeroSection/>
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services/>
    <InfoSection {...homeObjThree} />
    <Footer/>
    </>
  )
}

export default Home