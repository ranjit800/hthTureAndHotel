import Image from "next/image";

import React from "react";
import heroImg from "@/public/Images/TourDetailsImg/HeroImage.png";
import locationIcon from "@/public/Images/HotelPageImg/locationIcon.png";


const HeroSection = () => {
  return (
    <div
      id="main"
      className="relative bg-cover bg-center h-[38rem] md:h-[40rem] lg:h-[52rem] flex items-center pt-20 "
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="z-10 max-w-[800px] container mx-auto md:text-left text-center px-6 md:px-0 text-white ">
        <div className="max-w-2xl">
          <div className="flex md:flex-row flex-col items-center space-x-2 text-sm mb-3 ">
            <span className="bg-white text-black px-2 py-1 rounded-md ">
              ⭐ 4.0 (23)
              <span>😊</span>
            </span>
           
            <div className="flex items-center text-sm font-Inter">
                <Image
                  src={locationIcon}
                  alt="Location"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <p className="text-[#FFFFFF]">Paris, France</p>
              </div>


            {/* <span>📍 Paris, France</span> */}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight font-Playfair-Display">
            Explore the world with <br /> exciting people
          </h1>
          <p className="mt-2 text-lg font-Playfair-Display">2 Days | 1 Night</p>
          <div className="mt-6 flex space-x-4 md:flex-row flex-col md:gap-0 gap-6">
            <button className="bg-[#FF4C00] text-white px-5 py-3 rounded-3xl font-semibold">
              GET FREE CONSULTATION →
            </button>
            {/* <button className="bg-[#CCF32F] text-black md:px-5 px-1 py-3 rounded-3xl font-semibold">
              TAKE A TRIP →
            </button> */}
            
            <div className=" flex md:justify-end justify-center">
              <button className="bg-[#CCF32F] text-black md:px-5 px-4 py-3 rounded-3xl font-semibold">
              TAKE A TRIP →
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm opacity-80">*Inclusive of all taxes</p>
        </div>
      </div>

     
    </div>
  );
};

export default HeroSection;
