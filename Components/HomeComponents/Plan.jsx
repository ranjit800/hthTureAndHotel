
"use client";

import React from "react";
import Image from "next/image";

import circle from "../../public/Images/homeImg/aboutplan/circle.png";
import bigCardImg from "../../public/Images/homeImg/aboutplan/bigCardImage.png";
import smallCardImg from "../../public/Images/homeImg/aboutplan/smallCardImg.png";
import ladyImg from "../../public/Images/homeImg/aboutplan/LadyImg.png";
import trainIcon from "../../public/Images/homeImg/aboutplan/trainIcon.png";
import planeIcon from "../../public/Images/homeImg/aboutplan/planeIcon.png";
import locationIcon from "../../public/Images/homeImg/location-icon.png";
import forMobile from "../../public/Images/homeImg/aboutplan/GraphicsLadyMobile.svg";

const Plan = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center md:py-10 py-0 pb-10 mb-0 md:mb-16 h-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 md:text-center text-left lg:text-left mb-0 lg:mb-0 px-4 lg:px-0">
        <p className="text-sm text-gray-500 font-medium mb-4 uppercase font-Inter">
          WHERE DO YOU WANT TO GO
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E3D4D] leading-snug mb-6 font-Playfair-Display">
          Let us worry about your <br className="hidden md:block" /> 
          <span className="text-[#0E3D4D]">plans, Just get packed</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-Inter">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form by injected humour or
          randomised words which don’t look even slightly believable. If you are
          going to use a passage of Lorem Ipsum, you need to be sure there
          isn’t.
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed md:mb-10 mb-0 font-Inter">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form by injected humour or
          randomised words which don’t look even slightly believable. If you are
          going to use a passage.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <div className="hidden lg:block  text-center bg-white shadow-md rounded-lg py-4 px-6 w-28 sm:w-32">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF4C00] font-Playfair-Display">
              2050 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm  font-Inter">
              Travel <br /> Customers
            </p>
          </div>
          <div className="hidden lg:block  text-center bg-white shadow-md rounded-lg py-4 px-6 w-28 sm:w-32">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF4C00] font-Playfair-Display">
              50 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-Inter">
              Curated <br /> Destination
            </p>
          </div>
          <div className="hidden lg:block  text-center bg-white shadow-md rounded-lg py-4 px-6 w-28 sm:w-32">
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF4C00] font-Playfair-Display">
              1000 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-Inter">
              Bookings <br /> Completed
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-1/2 md:w-full sm:w-full  flex flex-col gap-4 justify-center items-center md:p-4 p-0">
        <Image
          src={circle}
          alt="Background Circle"
          className="hidden lg:block absolute z-[-20] w-[40vh] h-[40vh] sm:w-[350px] sm:h-[350px] lg:w-[27vw] lg:h-[27vw]"
          title="Background Circle"
          loading="eager"
          width={1000}
          height={1000}
        />
        <div className="relative">
          {/* Image for Mobile */}
          <Image
            src={forMobile}
            alt="Lady Image for Mobile"
            className="block lg:hidden relative -bottom-7 "
           
            width={1000}
            height={1000}
          />
          {/* Image for Desktop */}
          <Image
            src={ladyImg}
            alt="Lady Image for Desktop"
            className="hidden lg:block relative -bottom-7 w-[30vw] lg:w-[350px] mx-auto"
           
            width={1000}
            height={1000}
          />
        </div>

        {/* Big Card */}
        <div className="hidden lg:block absolute -bottom-16 left-4 z-10 bg-white shadow-lg p-1 rounded-lg">
          <Image
            src={bigCardImg}
            alt="Explore Labuan Bajo"
            className="h-32"
          />
          <div className="px-4 pb-4">
            <p className="text-base mt-2 font-Lato">Explore Labuan Bajo</p>
            <div className="flex items-center gap-1">
              <Image
                src={locationIcon}
                alt="Location Icon"
                width={12}
                height={12}
                className="text-gray-500 mr-2"
              />
              <p className="text-sm text-gray-500" id="location font-Lato">
                NTT, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Small Card */}
        <div className="hidden lg:block absolute bottom-14 right-10 z-10 bg-white shadow-lg p-1 rounded-lg">
          <Image
            src={smallCardImg}
            alt="Le Pirate Hotel"
            className="w-40 h-20"
          />
          <div className="px-4 pb-4">
            <p className="text-xs mt-2 font-Lato">Le Pirate Hotel</p>
            <div className="flex items-center gap-2">
              <Image
                src={locationIcon}
                alt="Location Icon"
                width={12}
                height={12}
                className="text-gray-500 "
              />
              <p className="text-xs text-gray-500 font-Lato" id="location ">
                Flores, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Train Icon */}
        <div className="hidden lg:block absolute top-14 left-[15%]">
          <Image src={trainIcon} alt="Train Icon" className="w-14 h-14 md:w-20 md:h-20" />
        </div>

        {/* Plane Icon */}
        <div className="hidden lg:block absolute top-14 right-4 sm:right-20 bg-white shadow-lg rounded-xl px-4 py-2">
          <div className="flex items-center gap-2">
            <Image src={planeIcon} alt="Plane Icon" className="w-4 h-4 md:w-5 md:h-5" />
            <p className="text-xs md:text-sm font-medium font-Lato">Jakarta - Bali</p>
          </div>
        </div>
      
{/* Stats  for mobile view*/}
        <div className="flex  justify-center lg:justify-start gap-2 ">
          <div className="block lg:hidden  text-center bg-white shadow-md rounded-lg py-4 px-4 w-24">
            <h3 className="text-sm  font-bold text-[#FF4C00] font-Playfair-Display">
              2050 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-Inter ">
              Travel <br /> Customers
            </p>
          </div>
          <div className="block lg:hidden  text-center bg-white shadow-md rounded-lg py-4 px-4 w-24">
            <h3 className="text-sm  font-bold text-[#FF4C00] font-Playfair-Display">
              50 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-Inter">
              Curated <br /> Destination
            </p>
          </div>
          <div className="block lg:hidden  text-center bg-white shadow-md rounded-lg py-4 px-4 w-24">
            <h3 className="text-sm  font-bold text-[#FF4C00] font-Playfair-Display">
              1000 +
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm font-Inter">
              Bookings <br /> Completed
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Plan;
