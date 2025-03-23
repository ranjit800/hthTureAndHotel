"use client"

import PopularDes from '@/Components/HomeComponents/PopularDes'
import BestOffer from '@/Components/TourListComponents/BestOffer'
import Herosection from '@/Components/TourListComponents/Herosection'


import React from 'react'

const page = () => {
  return (
    <div className=" p-4 bg-gradient-to-b from-[#ebf9b5] to-[#F1FFB600]min-h-screen py-20 mt-10">
      <Herosection/>
      <PopularDes/>
     <BestOffer/>
      
    </div>
  )
}

export default page
