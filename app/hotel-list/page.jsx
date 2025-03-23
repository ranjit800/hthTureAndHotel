
import Askedqns from '@/Components/HotelListComponents/Askedqns'
import HeroSection from '@/Components/HotelListComponents/HeroSection'
import NextStay from '@/Components/HotelListComponents/NextStay'
import PopulatStays from '@/Components/HotelListComponents/PopulatStays'
import FloatingButtons from '@/Components/LayoutComponents/FloatingButtons'

import React from 'react'

function page() {
  return (
   <>
   <HeroSection/>
   <NextStay/>
   <Askedqns/>
  <PopulatStays/>
  <FloatingButtons/>
   </>
  )
}

export default page
