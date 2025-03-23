import PopulatStays from '@/Components/HomeComponents/PopularStays'
import AlsoLike from '@/Components/HotelPage/AlsoLike'
import AskQns from '@/Components/HotelPage/AskQns'
import HeroSection from '@/Components/HotelPage/HeroSection'
// import OverView from '@/Components/HotelPage/OverView'
import React from 'react'
import HotalDetails from '@/Components/HotelPage/HotalDetails'

const page = () => {
  return (
    <>
    <HeroSection/>
    {/* <OverView/> */}
    
    <HotalDetails/>
    <AlsoLike/>
    <AskQns/>
    <PopulatStays/>
   
    </>
  )
}

export default page
