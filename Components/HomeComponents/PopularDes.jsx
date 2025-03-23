// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import maldives from "../../public/Images/homeImg/maldives.png";
// import dubai from "../../public/Images/homeImg/dubai.png";
// import thailand from "../../public/Images/homeImg/thailand.png";
// import srilanka from "../../public/Images/homeImg/srilanka.png";
// import europe from "../../public/Images/homeImg/europe.png";
// import bali from "../../public/Images/homeImg/maldives.png"; // Using maldives as demo for Bali
// import paris from "../../public/Images/homeImg/dubai.png"; // Using dubai as demo for Paris
// import tokyo from "../../public/Images/homeImg/thailand.png"; // Using thailand as demo for Tokyo

// // Bottom section images
// import offbeat from "@/public/Images/homeImg/offbeat.png";
// import wildlife from "@/public/Images/homeImg/wildlife.png";
// import Community from "@/public/Images/homeImg/Community.png";
// import privateTrip from "@/public/Images/homeImg/PriviteTrip.png";
// import arrowButton from "../../public/Images/homeImg/Button.png";

// const destinations = [
//   { name: "Maldives", price: "₹ 5999", season: "June-Apr", image: maldives },
//   { name: "Dubai", price: "₹ 5999", season: "June-Apr", image: dubai },
//   { name: "Thailand", price: "₹ 5999", season: "June-Apr", image: thailand },
//   { name: "Sri Lanka", price: "₹ 5999", season: "June-Apr", image: srilanka },
//   { name: "Europe", price: "₹ 5999", season: "June-Apr", image: europe },
//   { name: "Bali", price: "₹ 6999", season: "May-Oct", image: bali },
//   { name: "Paris", price: "₹ 7999", season: "Apr-Oct", image: paris },
//   { name: "Tokyo", price: "₹ 8999", season: "Mar-May", image: tokyo },
// ];

// const tripCategories = [
//   { name: "Offbeat", image: offbeat },
//   { name: "Wildlife Activities", image: wildlife },
//   { name: "Community Trips", image: Community },
//   { name: "Private Trips", image: privateTrip },
// ];

// const PopularDes = () => {
//   return (
//     <section className="">
//       <main className="container mx-auto  h-auto pb-0 md:mb-10 mb-1  px-4 sm:px-6 lg:px-8 md:mt-16 mt-0 ">
//         {/* Header */}
//         <h2 className="text-center text-xs md:text-sm mb-2 font-Inter text-gray-600">
//           WHERE DO YOU WANT TO GO
//         </h2>
//         <h1 className="text-center text-3xl font-bold mb-10 font-Playfair-Display text-gray-900">
//           Popular destinations
//         </h1>

//         {/* Swiper Carousel */}
//         <Swiper
//           slidesPerView={1.5}
//           spaceBetween={20}
//           className="mySwiper"
//           breakpoints={{
//             480: { slidesPerView: 2, spaceBetween: 15 }, // For small phones
//             768: { slidesPerView: 3, spaceBetween: 20 }, // For tablets
//             1024: { slidesPerView: 4, spaceBetween: 25 }, // For laptops
//             1280: { slidesPerView: 5, spaceBetween: 30 }, // For desktops
//           }}
//           loop={true}
//           grabCursor={true}
//           modules={[Autoplay]}
//           autoplay={{
//             delay: 1600,
//           }}
//         >
//           {destinations.map((destination, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg "
//                 style={{
//                   backgroundImage: `url(${destination.image.src})`,
//                 }}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>

//                 {/* Price */}
//                 <div className="absolute top-4 right-4 text-white px-3 py-1 rounded ">
//                   <h3 className="text-lg font-bold">{destination.price}</h3>
//                 </div>

//                 {/* Destination Details */}
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="text-sm">{destination.season}</h3>
//                   <h4 className="text-xl font-bold">{destination.name}</h4>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}

//            {/* New Section: Bottom Four Divs */}
//         <div 
//           className="flex overflow-x-auto md:gap-4 gap-1.5 md:mt-8 mt-4 md:px-0 px-3 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 "
//           style={{
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//             '::WebkitScrollbar':{
//               display: 'none'
//             }
//           }}
//         >
//           {tripCategories.map((trip, index) => (
//             <div
//               key={index}
//               className="relative flex-none w-[32%] h-[21vw] md:w-full md:h-[25vw] lg:h-[13vw] bg-cover bg-center rounded-lg shadow-lg flex items-end md:p-4 p-0.5 text-white font-bold text-lg snap-start"
//               style={{
//                 backgroundImage: `url(${trip.image.src})`,
//               }}
//             >
//               {/* <div className="absolute inset-0 bg-black bg-opacity-25 rounded-xl"></div> */}
//               <div className="relative flex justify-between items-center w-full font-Playfair-Display">
//                 <span className="text-[1.2vh] md:text-lg">{trip.name}</span>
//                 <img src={arrowButton.src} alt="Arrow" className="w-4 h-4 md:w-10 md:h-10" />
//               </div>
//             </div>
//           ))}
//         </div>
//         </Swiper>

       
//       </main>
//     </section>
//   );
// };

// export default PopularDes;


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

// Bottom section images
import offbeat from "@/public/Images/homeImg/offbeat.png";
import wildlife from "@/public/Images/homeImg/wildlife.png";
import Community from "@/public/Images/homeImg/Community.png";
import privateTrip from "@/public/Images/homeImg/PriviteTrip.png";
import arrowButton from "../../public/Images/homeImg/Button.png";

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

const tripCategories = [
  { name: "Offbeat", image: offbeat },
  { name: "Wildlife Activities", image: wildlife },
  { name: "Community Trips", image: Community },
  { name: "Private Trips", image: privateTrip },
];

const PopularDes = () => {
  return (
    <section className="">
      <main className="container mx-auto  h-auto pb-0 md:mb-10 mb-1  px-4 sm:px-6 lg:px-8 md:mt-16 mt-0 ">
        {/* Header */}
        <h2 className="text-center text-xs md:text-sm mb-2 font-Inter text-gray-600">
          WHERE DO YOU WANT TO GO
        </h2>
        <h1 className="text-center text-3xl font-bold mb-10 font-Playfair-Display text-gray-900">
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
                className="relative w-full h-80 bg-cover bg-center rounded-lg shadow-lg "
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

           {/* New Section: Bottom Four Divs */}
        <div 
          className="flex overflow-x-auto md:gap-4 gap-1.5 md:mt-8 mt-4 md:px-0 px-3 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::WebkitScrollbar':{
              display: 'none'
            }
          }}
        >
          {tripCategories.map((trip, index) => (
            <div
              key={index}
              className="relative flex-none w-[40%] h-[25vw] md:w-full md:h-[25vw] lg:h-[13vw] bg-cover bg-center rounded-lg shadow-lg flex items-end md:p-4 p-0.5 text-white font-bold text-lg snap-start"
              style={{
                backgroundImage: `url(${trip.image.src})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-25 rounded-xl"></div>
              <div className="relative flex justify-between items-center w-full font-Playfair-Display">
                <span className="text-[1.4vh] text-stroke text-white drop-shadow-md md:text-lg">{trip.name}</span>
                <img src={arrowButton.src} alt="Arrow" className="w-5 h-5 md:w-10 md:h-10" />
              </div>
            </div>
          ))}
        </div>
        </Swiper>

       
      </main>
    </section>
  );
};

export default PopularDes;
