import React from 'react'

import Navbar from './Components/Navbar'

import Home from './Routes/Home'
import RecruitmentServices from './Routes/RecruitmentServices'
import HardwareInstallation from './Routes/HardwareInstallation'
import AboutUs from './Routes/AboutUs'
import ContactUs from './Routes/ContactUs'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './Components/Footer'




const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/recruitment' element={<RecruitmentServices/>}/>
       <Route path='/hardware' element={<HardwareInstallation/>}/>
       <Route path='/about' element={<AboutUs/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     <Footer/>

    </BrowserRouter> 
   
  )
}

export default App