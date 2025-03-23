
"use client"

import React from 'react'
import HeroHome from '../Components/HomeComponents/HeroHome'
import PopularDes from '../Components/HomeComponents/PopularDes'
import SecondSection from '../Components/HomeComponents/SecondSection'
import AboutSection from '../Components/HomeComponents/AboutSection'
import Explore from '../Components/HomeComponents/Explore'
import Plan from '@/Components/HomeComponents/Plan'
// import BestOffer from '@/Components/HomeComponents/BestOffer'
import TravelArticles from '@/Components/HomeComponents/TravelArticles'
import ExploreInternational from '@/Components/HomeComponents/ExploreInternational'
import FindStay from '@/Components/HomeComponents/FindStay'
import PopulatStays from '@/Components/HomeComponents/PopularStays'
import FloatingButtons from '@/Components/LayoutComponents/FloatingButtons'
// import EnquiryModal from '@/Components/LayoutComponents/EnquiryModal'

const page = () => {
  return (
   <>
    
  <HeroHome/>
  <SecondSection/>
  <PopularDes/>
  <AboutSection/>
  <Explore/>
  <ExploreInternational/>
  <FindStay/>
  <PopulatStays/>
  <Plan/>
  {/* <BestOffer/> */}
  <TravelArticles/>
  <FloatingButtons/>/
  {/* <EnquiryModal/> */}
  

   </>
  )
}

export default page
