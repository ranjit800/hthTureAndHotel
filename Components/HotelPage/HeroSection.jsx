
"use client";
import React, { useState } from "react";
import Image from "next/image";

import heroImg from "@/public/Images/HotelPageImg/HeroImage3.webp";
import layoutImg1 from "@/public/Images/HotelPageImg/layoutImg1.webp";
import layoutImg2 from "@/public/Images/HotelPageImg/layoutImg2.webp";
import layoutImg3 from "@/public/Images/HotelPageImg/layoutImg3.webp";
import layoutImg4 from "@/public/Images/HotelPageImg/layoutImg4.webp";
import locationIcon from "@/public/Images/HotelPageImg/locationIcon.png";
import PlayButton from "@/public/Images/HotelPageImg/PlayButton.png";

const HeroSection = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: layoutImg1, alt: "Room View 1", width: 2070 },
    { src: layoutImg2, alt: "Room View 2", width: 2070 },
    { src: layoutImg3, alt: "Room View 3", width: 2070 },
    { src: layoutImg4, alt: "Room View 4", width: 2070 },
    { src: layoutImg1, alt: "Hotel Front", width: 2070 },
    
    // Add more demo images here with the same pattern
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[25rem] md:h-[40rem] lg:h-[50rem] flex items-center text-white"
        style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-[800px] container mx-auto md:text-left text-center px-6 md:px-0">
          <div className="flex flex-col md:flex-row items-center space-x-1 shadow-md">
            <div className="bg-white px-3 py-1 rounded-full">
              <span className="text-yellow-500 text-sm font-semibold">★</span>{" "}
              <span className="text-sm font-medium text-black">4.5 (23)</span>
              <span>😊</span>
            </div>
            <div>
              <div className="flex items-center text-sm font-Inter">
                <Image
                  src={locationIcon}
                  alt="Location"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <p className="text-[#FFFFFF]">Guwahati, Asssam</p>
              </div>
            </div>
          </div>

          <h1 className="text-xl md:text-5xl font-bold leading-snug font-Playfair-Display">
            Serenity Inn and Grill Opens <br /> in New Window
          </h1>
          <p className="mt-3 text-base md:text-lg font-Inter">
            Fits 2 Adults | Complimentary Breakfast
          </p>
        </div>
      </div>

      {/* Layout Section */}
      <div className="z-10 relative h-auto md:h-[40rem] lg:h-[35rem] container mx-auto flex md:flex-row flex-col md:gap-4 gap-2  -mt-16 md:-mt-24 lg:-mt-40 mb-6 md:px-0 px-6">
        {/* Left Section */}
        <div id="left" className="md:w-1/2 w-full flex relative">
          <Image
            src={layoutImg1}
            alt="Room"
            className="rounded-lg w-full object-cover shadow-lg"
          />
          <button 
            onClick={() => setShowGallery(true)}
            className="absolute bottom-4 left-4 bg-[#CCF32F] text-black font-Inter px-4 py-2 rounded-2xl shadow-md hover:bg-gray-100 transition font-medium"
          >
            Show all photos
          </button>
         
          {/* <button className="absolute bottom-2 md:left-[30%] right-4 p-2 rounded-full shadow-md hover:bg-gray-100 transition">
            <Image
              src={PlayButton}
              alt="Play"
              width={40}
              height={40}
            />
          </button> */}
        </div>

        {/* Right Section */}
        <div
          id="right"
          className="md:w-1/2 w-full overflow-hidden flex flex-col md:gap-4 gap-2"
        >
          {/* Top Image */}
          <div className="h-1/2">
            <Image
              src={layoutImg2}
              alt="Room"
              className="rounded-lg w-full h-full object-cover shadow-lg lg:block hidden"
            />
          </div>

          {/* Bottom Images */}
          <div className="h-1/2 flex md:gap-4 gap-2">
            <div className="w-1/2">
              <Image
                src={layoutImg3}
                alt="Room"
                className="rounded-lg w-full h-full object-cover shadow-lg lg:block hidden"
              />
            </div>
            <div className="w-1/2">
              <Image
                src={layoutImg4}
                alt="Room"
                className="rounded-lg w-full h-full object-cover shadow-lg lg:block hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center">
            {/* Close Button */}
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 text-white text-xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 z-50"
            >
              ×
            </button>

            {/* Previous Button */}
            <button
              onClick={previousImage}
              className="absolute left-4 text-white text-4xl bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700"
            >
              ‹
            </button>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center px-20">
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                width={galleryImages[currentImageIndex].width}
                height={Math.round(galleryImages[currentImageIndex].width * 0.75)}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-4xl bg-gray-800/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700"
            >
              ›
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-800/50 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
