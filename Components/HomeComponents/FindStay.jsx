"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BluPlaza from "../../public/Images/HotelListIg/nextStay/bluPlaza.png";
import Falaknuma from "../../public/Images/HotelListIg/nextStay/falaknuma.png";
import Himalayas from "../../public/Images/HotelListIg/nextStay/himalayas.png";
import Hotel from "../../public/Images/HotelListIg/nextStay/hotel.png";
import Hyatt from "../../public/Images/HotelListIg/nextStay/hyatt.png";
import LeelaPalace from "../../public/Images/HotelListIg/nextStay/leelaPalace.png";
import Oberoi from "../../public/Images/HotelListIg/nextStay/oberoi.png";
import Royel from "../../public/Images/HotelListIg/nextStay/royel.png";
import TajMahal from "../../public/Images/HotelListIg/nextStay/tajMahal.png";
import locationIcon from "../../public/Images/ExploreImg/locationIcon.png";

const AlsoLike = () => {
  const hotels = [
    { name: "Blu Plaza", location: "Mumbai, Maharashtra", price: "Rs. 5,000/-", image: BluPlaza },
    { name: "Falaknuma Palace", location: "Hyderabad, Telangana", price: "Rs. 6,000/-", image: Falaknuma },
    { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
    { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
    { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
    { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
    { name: "The Oberoi", location: "Gurgaon, Haryana", price: "Rs. 10,000/-", image: Oberoi },
    { name: "Royel Stay", location: "Jaipur, Rajasthan", price: "Rs. 6,500/-", image: Royel },
    { name: "Taj Mahal View", location: "Agra, Uttar Pradesh", price: "Rs. 12,000/-", image: TajMahal },
  ];

  return (
    <div className="relative w-full overflow-x-hidden pb-6 py-10">
    

     {/* Top Section: Heading & Button */}
     <div className="flex flex-col sm:flex-row justify-between md:tems-start items-center   container mx-auto">
        <div className="text-center md:text-start">
          <h4 className="text-sm uppercase text-gray-500 font-semibold font-Inter ">
            Where do you want to go
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 font-Playfair-Display ">
          Find your next stay
          </h2>
        </div>
        <button className="mt-4 sm:mt-0 px-6 py-3  text-[#05073C] font-bold  hover:text-[#FF4C00] transition lg:block hidden">
        Explore Hotels →
        </button>
      </div>

      <div className="flex flex-col ">
        <div className="mx-[-5%] md:mx-[-10%] w-[110%] md:w-[120%] font-Inter">
          <div className="pagination-wrapper p-5 sm:p-0 md:p-0 lg:p-0 ">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              grabCursor={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletActiveClass: "swiper-pagination-bullet-active",
                bulletClass: "swiper-pagination-bullet",
                renderBullet: function (index, className) {
                  return `<span class="${className}" style="background: #CCF32F; width: 20px; height: 20px; margin: 0 8px;"></span>`;
                },
              }}
              modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1600,
        }}
              className="mySwiper relative mt-14 pb-16"
            >
              {hotels.map((hotel, index) => (
                <SwiperSlide key={index} className="p-2 md:p-4 ">
                  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-[350px] md:h-[400px] lg:h-[450px] border">
                    <div className="relative">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-[200px] md:h-[250px] lg:h-[290px] object-cover"
                        width={300}
                        height={256}
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                        <span className="text-[#FF4C00] text-sm font-semibold">★</span>
                        <span className="text-sm font-medium">4.5 (23)</span>
                      </div>
                      <button className="absolute -bottom-5 left-4 bg-[#CCF32F] text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lime-600">
                        SEE AVAILABILITY
                      </button>
                    </div>
                    <div className="p-4 mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{hotel.name}</h3>
                      <p className="text-[#FF4D00] font-bold mb-2">
                        {hotel.price}{" "}
                        <span className="text-gray-800 text-base font-light">Per Night</span>
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Image
                          src={locationIcon}
                          alt="Location"
                          width={16}
                          height={16}
                          className="mr-1 "
                        />
                        <p>{hotel.location}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <button className="md:mt-5 -mt-10 px-6 py-3 bg-orange-500 text-white font-bold rounded-3xl shadow-lg hover:bg-orange-600 transition block lg:hidden mx-auto ">
          Take a Trip →
        </button>
      </div>
      <style jsx global>{`
        .swiper {
          position: relative;
          padding-bottom: 90px; 
        }

        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
          display: none;
        }

        @media (min-width: 640px) {
          .swiper-pagination {
            display: block;
          }
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #4caf50; /* Green dots */
          opacity: 1;
          margin: 0 6px;
        }

        .swiper-pagination-bullet-active {
          background: #388e3c; /* Darker green for active */
        }
      `}</style>

    </div>
  );
};

export default AlsoLike;
