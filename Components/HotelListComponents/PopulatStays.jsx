
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import maldives from "../../public/Images/homeImg/maldives.png";
import dubai from "../../public/Images/homeImg/dubai.png";
import thailand from "../../public/Images/homeImg/thailand.png";
import srilanka from "../../public/Images/homeImg/srilanka.png";
import europe from "../../public/Images/homeImg/europe.png";
import bali from "../../public/Images/homeImg/maldives.png"; // Using maldives as demo for Bali
import paris from "../../public/Images/homeImg/dubai.png"; // Using dubai as demo for Paris
import tokyo from "../../public/Images/homeImg/thailand.png"; // Using thailand as demo for Tokyo

const destinations = [
  { name: "Maldives", price: "₹ 5999", season: "June-Apr", image: maldives },
  { name: "Dubai", price: "₹ 5999", season: "June-Apr", image: dubai },
  { name: "Thailand", price: "₹ 5999", season: "June-Apr", image: thailand },
  { name: "Sri Lanka", price: "₹ 5999", season: "June-Apr", image: srilanka },
  { name: "Europe", price: "₹ 5999", season: "June-Apr", image: europe },
  { name: "Bali", price: "₹ 6999", season: "May-Oct", image: bali },
  { name: "Paris", price: "₹ 7999", season: "Apr-Oct", image: paris },
  { name: "Tokyo", price: "₹ 8999", season: "Mar-May", image: tokyo },
];

const PopulatStays = () => {
  return (
    <main className="container mx-auto h-auto pb-16 mb-20 px-4 sm:px-6 lg:px-8 md:mt-16 mt-0">
      {/* Header */}
      <h2 className="text-center text-xs md:text-sm mb-6 font-Inter text-gray-600">
      WHERE DO YOU WANT TO GO
      </h2>
      <h1 className="text-center text-4xl font-bold mb-10 font-Playfair-Display text-gray-900">
        Popular destinations
      </h1>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        className="mySwiper"
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 15 }, // For small phones
          768: { slidesPerView: 3, spaceBetween: 20 }, // For tablets
          1024: { slidesPerView: 4, spaceBetween: 25 }, // For laptops
          1280: { slidesPerView: 5, spaceBetween: 30 }, // For desktops
        }}
        loop={true}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1600,
        }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${destination.image.src})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>

              {/* Price */}
              <div className="absolute top-4 right-4 text-white px-3 py-1 rounded ">
                <h3 className="text-lg font-bold">{destination.price}</h3>
              </div>

              {/* Destination Details */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm">{destination.season}</h3>
                <h4 className="text-xl font-bold">{destination.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};


export default PopulatStays
