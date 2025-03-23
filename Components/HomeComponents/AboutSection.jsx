"use client";

import React from "react";
import Image from "next/image";
import leftImg from "../../public/Images/aboutSectionImg/Image.png";
import icon1 from "../../public/Images/aboutSectionImg/icon1.png";
import icon2 from "../../public/Images/aboutSectionImg/icon2.png";
import icon3 from "../../public/Images/aboutSectionImg/icon3.png";
import icon4 from "../../public/Images/aboutSectionImg/icon4.png";




const AboutSection = () => {
  return (
    <section className="md:py-16 container mx-auto px-4 sm:px-6 lg:px-8 md:mb-0 mb-3">
      {/* Top Section: Heading & Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
        <div>
          <h4 className="text-sm uppercase text-gray-500 font-semibold font-Inter ">
            Where do you want to go
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 font-Playfair-Display">
            Let us worry about your plans, <br /> Just get packed
          </h2>
        </div>
        <button className="mt-4 sm:mt-0 px-6 py-3 bg-orange-500 text-white font-bold rounded-3xl shadow-lg hover:bg-orange-600 transition lg:block hidden">
          Take a Trip →
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Section - Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={leftImg}
            alt="Destination"
            className="rounded-xl w-full"
          />
        </div>
        {/* =================== */}
        {/* Right Section - Cards */}
        
        <div className="flex flex-col flex-wrap w-full lg:w-1/2 h-auto md:h-[30rem] gap-6  p-4 ">
          <div id="left" className="w-full md:w-1/2 flex flex-col justify-start md:justify-start gap-6 lg:gap-10">
            {/* card1 */}
            <div className="flex items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-[#CCF32F] transition w-full">
              
              <div className="flex items-center justify-center w-10 h-12  text-blue-500 rounded-full">
                {/* Airplane Icon */}
                <Image src={icon1} alt="Destination" className=" w-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800 font-Playfair-Display">Get a hotel</h3>
                <p className="text-gray-500 font-Inter">
                  Lorem ipsum dolor sit amet consectetur fin dren.
                </p>
              </div>
            </div>
             {/* card2 */}
             <div className="flex items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg  hover:bg-[#CCF32F]  transition w-full">
              <div className="flex items-center justify-center w-10 h-12  text-blue-500 rounded-full">
                {/* Airplane Icon */}
                <Image src={icon2} alt="Destination" className=" w-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800 font-Playfair-Display">Get customise tour</h3>
                <p className="text-gray-500 font-Inter">
                  Lorem ipsum dolor sit amet consectetur fin dren.
                </p>
              </div>
            </div>
          </div>
          
          <div id="right" className="w-full md:w-1/2 flex flex-col justify-start md:justify-end gap-6 lg:gap-10 lg:mt-10 md:mt-0 sm:mt-0 mt-0">
            {/* card1 */}
            <div className="flex items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-[#CCF32F] transition w-full">
              <div className="flex items-center justify-center w-10 h-12  text-blue-500 rounded-full">
                {/* Airplane Icon */}
                <Image src={icon3} alt="Destination" className=" w-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800 font-Playfair-Display">Get a cab</h3>
                <p className="text-gray-500 font-Inter">
                  Lorem ipsum dolor sit amet consectetur fin dren.
                </p>
              </div>
            </div>
             {/* card2 */}
             <div className="flex items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg hover:bg-[#CCF32F] transition w-full">
              <div className="flex items-center justify-center w-10 h-12  text-blue-500 rounded-full">
                {/* Airplane Icon */}
                <Image src={icon4} alt="Destination" className=" w-full" />
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-gray-800 font-Playfair-Display"> Get Homestay / camping</h3>
                <p className="text-gray-500 font-Inter">
                  Lorem ipsum dolor sit amet consectetur fin dren.
                </p>
              </div>
            </div>
          </div>
        </div>
       
        {/* ================= */}
      </div>
      <button className="mt-4 sm:mt-0 px-6 py-3 bg-orange-500 text-white font-bold rounded-3xl shadow-lg hover:bg-orange-600 transition block lg:hidden mx-auto ">
          Take a Trip →
        </button>
    </section>
  );
};

export default AboutSection;



