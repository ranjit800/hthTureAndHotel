// "use client"

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";
// import BluPlaza from "../../public/Images/HotelListIg/nextStay/bluPlaza.png";
// import Falaknuma from "../../public/Images/HotelListIg/nextStay/falaknuma.png";
// import Himalayas from "../../public/Images/HotelListIg/nextStay/himalayas.png";
// import Hotel from "../../public/Images/HotelListIg/nextStay/hotel.png";
// import Hyatt from "../../public/Images/HotelListIg/nextStay/hyatt.png";
// import LeelaPalace from "../../public/Images/HotelListIg/nextStay/leelaPalace.png";
// import Oberoi from "../../public/Images/HotelListIg/nextStay/oberoi.png";
// import Royel from "../../public/Images/HotelListIg/nextStay/royel.png";
// import TajMahal from "../../public/Images/HotelListIg/nextStay/tajMahal.png";
// import locationIcon from "../../public/Images/ExploreImg/locationIcon.png";

// const hotelData = [
//   { name: "Blu Plaza", location: "Mumbai, Maharashtra", price: "Rs. 5,000/-", image: BluPlaza },
//   { name: "Falaknuma Palace", location: "Hyderabad, Telangana", price: "Rs. 6,000/-", image: Falaknuma },
//   { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
//   { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
//   { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
//   { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
//   { name: "The Oberoi", location: "Gurgaon, Haryana", price: "Rs. 10,000/-", image: Oberoi },
//   { name: "Royel Stay", location: "Jaipur, Rajasthan", price: "Rs. 6,500/-", image: Royel },
//   { name: "Taj Mahal View", location: "Agra, Uttar Pradesh", price: "Rs. 12,000/-", image: TajMahal },
//   { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
//   { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
//   { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
//   { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
// ];

// const AlsoLike = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(hotelData.length / itemsPerPage);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//   }, [totalPages]);

//   const getVisibleHotels = () => {
//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
    
//     if (endIndex > hotelData.length) {
//       // If we need more items than available at the end, wrap around to the start
//       const endItems = hotelData.slice(startIndex);
//       const remainingCount = itemsPerPage - endItems.length;
//       const startItems = hotelData.slice(0, remainingCount);
//       return [...endItems, ...startItems];
//     }
    
//     return hotelData.slice(startIndex, endIndex);
//   };

//   const handlePageClick = (pageIndex) => {
//     setCurrentPage(pageIndex);
//   };

//   return (
    // <section className="bg-white py-12 overflow-hidden">
      // {/* Banner Section */}
      // <div className="relative">
      //   <Image src={Banner} alt="Bottom Banner" layout="responsive" className="block mx-auto" />
      // </div>

      // {/* Title */}
      // <div className="text-center mt-16">
      //   <p className="text-sm text-gray-500 uppercase tracking-wide">WHERE DO YOU WANT TO GO</p>
      //   <h2 className="text-3xl font-bold text-gray-900 mt-2">You might also like</h2>
      // </div>

      // {/* Card Section */}
      // <div className="mt-10 relative">
      //   <div className="flex gap-6 px-6" style={{ marginLeft: '-10%', width: '120%', transition: 'transform 0.5s ease-in-out' }}>
      //     {getVisibleHotels().map((hotel, index) => (
      //       <div
      //         key={`${currentPage}-${index}`}
      //         className="relative bg-white rounded-lg shadow-md border border-gray-200 w-[calc(20%-12px)] flex-shrink-0"
      //       >
      //         <div className="relative">
      //           <Image
      //             src={hotel.image}
      //             alt={hotel.name}
      //             className="w-full h-44 object-cover"
      //             layout="responsive"
      //           />
      //           <button className="absolute -bottom-5 left-4 bg-[#CCF32F] text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lime-600">
      //             SEE AVAILABILITY
      //           </button>
      //         </div>
      //         <div className="p-4">
      //           <h3 className="text-lg font-semibold text-gray-800 mb-2">{hotel.name}</h3>
      //           <p className="text-[#FF4D00] font-bold mb-2">
      //             {hotel.price}{" "}
      //             <span className="text-gray-800 text-base font-light">Per Night</span>
      //           </p>
      //           <div className="flex items-center text-gray-500 text-sm">
      //             <Image
      //               src={locationIcon}
      //               alt="Location"
      //               width={16}
      //               height={16}
      //               className="mr-1"
      //             />
      //             <p>{hotel.location}</p>
      //           </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dots for Navigation */}
//       <div className="mt-8 flex justify-center space-x-2">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageClick(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
//               index === currentPage ? "bg-[#CCF32F]" : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AlsoLike;





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
import Banner from "../../public/Images/homeImg/bottomImg.svg";

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
    <div className="relative w-full overflow-x-hidden pb-6 ">
      {/* Banner Section */}
      <div className="relative">
        <Image src={Banner} alt=" Banner" layout="responsive" className="block mx-auto" />
      </div>

      {/* Title */}
      <div className="text-center mt-16">
        <p className="text-sm text-gray-500 uppercase tracking-wide font-Inter">WHERE DO YOU WANT TO GO</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2 font-Playfair-Display">You might also like</h2>
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
                  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden h-[350px] md:h-[400px] lg:h-[450px]">
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
      </div>
      <style jsx global>{`
        .swiper {
          position: relative;
          padding-bottom: 50px; /* Space for pagination */
        }

        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          text-align: center;
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


