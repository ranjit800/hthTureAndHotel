"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { RiPhoneFill } from "react-icons/ri";

const packages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dubai Highlights | Skyline And Sandscapes",
    duration: "5 days & 4 nights",
    rating: "4.9",
    reviews: "1.6k",
    oldPrice: "74,002",
    newPrice: "45,000",
    save: "29,002",
    days: "5D",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Escape To Dubai | Flights Inclusive Deal",
    duration: "5 days & 4 nights",
    rating: "5.0",
    reviews: "1.2k",
    oldPrice: "1,24,761",
    newPrice: "68,550",
    save: "56,211",
    days: "5D",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1459787915554-b34915863013?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discovering Dubai | A Journey To Haven",
    duration: "7 days & 6 nights",
    rating: "4.9",
    reviews: "1.6k",
    oldPrice: "1,11,836",
    newPrice: "86,000",
    save: "25,836",
    days: "7D",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Discovering Dubai | A Journey To Haven",
    duration: "6 days & 5 nights",
    rating: "4.8",
    reviews: "1.3k",
    oldPrice: "1,30,000",
    newPrice: "95,000",
    save: "35,000",
    days: "6D",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dubai Winter Wonderland Tour",
    duration: "8 days & 7 nights",
    rating: "5.0",
    reviews: "1.8k",
    oldPrice: "1,50,000",
    newPrice: "1,10,000",
    save: "40,000",
    days: "8D",
  },
];

const PopularForInternational = () => {
    return (
      <div className="container mx-auto px-4 md:px-0 mb-7 pb-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Dubai</h2>
          <button className="text-orange-500 font-semibold flex items-center">
            View All <span className="ml-1"> →</span>
          </button>
        </div>
  
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          // navigation
          // pagination={{ clickable: true }}
          // className="pb-8"
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <div className="bg-white border rounded-xl overflow-hidden md:h-[550px]  flex flex-col">
                <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
                
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600">{pkg.duration}</p>
                    <div className="flex items-center text-green-500 font-semibold">
                      ⭐ {pkg.rating} <span className="text-gray-500 text-sm ml-1">({pkg.reviews})</span>
                    </div>
                    <h3 className="text-lg font-bold mt-2">{pkg.title}</h3>
                  </div>
  
                  <div>
                    <div className="bg-gray-100 p-3 mt-3 rounded-lg">
                      <span className="bg-black text-white text-sm px-2 py-1 rounded">{pkg.days} Dubai</span>
                      <div className="mt-2">
                        <span className="text-lg font-bold">INR {pkg.newPrice}</span>
                        <span className="text-gray-400 line-through ml-2">INR {pkg.oldPrice}</span>
                        <span className="text-green-500 text-sm ml-2">SAVE INR {pkg.save}</span>
                      </div>
                    </div>
    
                    {/* Call Button + Request Callback Button */}
                    <div className="flex gap-2 mt-3">
                      <button className="flex items-center justify-center w-1/4 bg-white border border-orange-500 text-orange-500 py-2 rounded-lg">
                        <RiPhoneFill className="mr-1" />
                      </button>
                      <button className="flex items-center justify-center w-3/4 bg-orange-500 text-white py-2 rounded-lg">
                        <RiPhoneFill className="mr-2" /> Request Callback
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default PopularForInternational;