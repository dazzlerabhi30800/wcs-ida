import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import { useGlobalContext } from '../context';

const AboutUs = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => {updateAboutPage();}, [])

  return (
    <div>
    
      <HeroSection />
    </div>
  )
}

export default AboutUs