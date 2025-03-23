import DomesticDestination from '@/Components/DomesticTour/DomesticDestination'
import HeroSection from '@/Components/DomesticTour/HeroSection'
import PopularDes from '@/Components/HomeComponents/PopularDes'
import PopularForDomestic from '@/Components/PopularPackages/PopularForDomestic'
import React from 'react'

const page = () => {
  return (
    <>
     <HeroSection/>
     <PopularDes/>
     <DomesticDestination/>
     <PopularForDomestic/>
    </>
  )
}

export default page
