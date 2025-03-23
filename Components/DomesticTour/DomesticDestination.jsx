"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";

import Image from "next/image";
import JagannathTemp from "../../public/Images/ExploreImg/JagannathTemp.png"
import Karnataka from "../../public/Images/ExploreImg/Karnataka.png";
import Kaziranga from "../../public/Images/ExploreImg/Kaziranga.png";
import Lakshadweep from "../../public/Images/ExploreImg/Lakshadweep.png";
import Punjab from "../../public/Images/ExploreImg/Punjab.png";
import Tajmahal from "../../public/Images/ExploreImg/Tajmahal.png";

import dayIcon from "../../public/Images/ExploreImg/dayIcon.png";
import locationIcon from "../../public/Images/ExploreImg/locationIcon.png";
import personIcon from "../../public/Images/ExploreImg/personIcon.png";

const destinations = [
  {
    image: Lakshadweep,
    title: "Best in Lakshadweep",
    alt: "Lakshadweep"
  },
  {
    image: Kaziranga,
    title: "Best in Kaziranga",
    alt: "Kaziranga"
  },
  {
    image: JagannathTemp,
    title: "Best Jagannath Temple",
    alt: "Jagannath Temple"
  },
  {
    image: Karnataka,
    title: "Ruins in Hampi, Karnataka",
    alt: "Karnataka"
  },
  {
    image: Punjab,
    title: "Golden Temple Punjab",
    alt: "Punjab"
  },
  {
    image: Tajmahal,
    title: "Tajmahal India Agra",
    alt: "Tajmahal"
  }
];

const DestinationCard = ({ image, title, alt }) => (
  <div className="bg-white border rounded-2xl overflow-hidden relative">
    <div className="relative">
      <Image
        src={image}
        alt={alt}
        className="w-full h-[200px] md:h-[250px] lg:h-[290px] object-cover"
        width={300}
        height={256}
      />
      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
        <span className="text-yellow-500 text-sm font-semibold">★</span>
        <span className="text-sm font-medium">4.0 (23)</span>
        <span>😊</span>
      </div>
      <Link href={'/tour-list'}>
      <button className="absolute -bottom-4 left-4 bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition">
        View Details
      </button>
      </Link>
    </div>
    <div className="p-6">
      <h3 className="md:text-lg text-sm   font-bold text-gray-900 font-Inter mb-2">
        {title}
      </h3>
      <p className="text-orange-500 font-semibold md:text-lg text-sm mb-2">
        Rs. 45,000/- Per person
      </p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center space-x-2">
          <Image src={dayIcon} alt="Days Icon" className="w-5 h-5" />
          <p>4 Day's</p>
        </div>
        <div className="flex items-center space-x-2">
          <Image src={personIcon} alt="Person Icon" className="w-5 h-5" />
          <p>10+</p>
        </div>
        <div className="flex items-center space-x-2">
          <Image src={locationIcon} alt="Location Icon" className="w-5 h-5" />
          <p>India</p>
        </div>
      </div>
    </div>
  </div>
);

const DomesticDestination = () => {
  return (
    <section className="bg-white md:bg-gradient-to-b from-[#F1FFB6] to-[#F1FFB600]  py-10 mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-sm uppercase text-gray-500 font-semibold font-Inter md:mb-0 mb-3">
            Where do you want to go
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 font-Playfair-Display">
          Most  popular tours
          in India
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>

        {/* Mobile View with Swiper */}
        <div className="sm:hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <DestinationCard {...dest} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="text-center md:mt-12 mt-6 ">
          <button className="bg-orange-500 text-white font-semibold py-3 px-10 rounded-3xl hover:bg-orange-600 transition">
            Explore All →
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default DomesticDestination;
