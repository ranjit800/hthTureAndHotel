// "use client";

// import React from "react";
// import Image from "next/image";
// import HeroImg from "../../public/Images/homeImg/HeroImagenew.webp";
// import locationIcon from "../../public/Images/homeImg/location-icon.png";

// const HeroHome = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative h-[30rem] md:h-[40rem] lg:h-[52rem] flex items-center justify-center text-center text-white"
//         style={{
//           backgroundImage: `url(${HeroImg.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-200 bg-opacity-5"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4 lg:w-1/2">
//           <h2 className="text-xs md:text-sm font-light mb-4 ">
//             We help people find co-travelers and also <br /> structure their travel
//             plans
//           </h2>
//           <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-14 font-Playfair-Display ">
//             Explore the world with <br className="hidden md:block" /> exciting people
//           </h1>

//           {/* Search Bar */}
//           <div className="relative w-full max-w-xl lg:max-w-2xl mx-auto ">
//             <div className="flex flex-row items-center bg-white rounded-full shadow-md p-1.5 lg:p-3 ">
//               {/* Location Icon */}
//               <div className="flex items-center px-2 w-auto">
//                 <Image
//                   src={locationIcon}
//                   alt="Location Icon"
//                   width={16}
//                   height={16}
//                   className="text-gray-500"
//                 />
//               </div>

//               {/* Input Field */}
//               <input
//                 type="text"
//                 placeholder="Search Favorite Destinations - City - Region"
//                 className="flex-grow px-2 py-1.5 text-gray-700 focus:outline-none text-xs lg:text-base"
//               />

//               {/* Search Button */}
//               <button className="bg-[#FF4C00] hover:bg-orange-600 text-white px-3 py-1.5 lg:px-8 lg:py-2 text-sm lg:text-base rounded-full ">
//                 SEARCH
//               </button>
//             </div>

//             {/* "Your Wish Our Destination" Style */}
//             <div className="absolute md:-bottom-5 -bottom-5 md:left-6 left-5 bg-lime-500 text-white text-xs px-2 py-0.5 rounded-bl-lg rounded-br-lg shadow-lg">
//               Your Wish Our Destination
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroHome;


// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Img1 from "@/public/Images/homeImg/poster.png"


// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = [
//   { src: Img1, alt: "Offer 1" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img1, alt: "Offer 1" },

  
// ];

// const BestOffer = () => {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const swiperRef = React.useRef(null);

//   const handlePaginationClick = (index) => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       // For desktop, multiply index by 3 since we show 3 slides at a time
//       const slideIndex = window.innerWidth >= 1024 ? index * 3 : index;
//       swiperRef.current.swiper.slideTo(slideIndex);
//       setActiveIndex(index);
//     }
//   };

//   const handleSlideChange = (swiper) => {
//     // For desktop, divide realIndex by 3 since we show 3 slides at a time
//     const newIndex = window.innerWidth >= 1024 ? 
//       Math.floor(swiper.realIndex / 3) : 
//       swiper.realIndex;
//     setActiveIndex(newIndex);
//   };

//   return (
//     <section className="relative py-10 md:h-[40rem] h-[25rem] bg-[#F1FFB6]">
//       <div className="container mx-auto text-center py-10 md:pt-36">
//         <div className="relative mt-8">
//           <div className=" custom-swiper-container px-4 md:px-20">
//             <Swiper
//               ref={swiperRef}
//               modules={[Navigation, Pagination, Autoplay]}
//               spaceBetween={10}
//               slidesPerView={1.2}
//               breakpoints={{
//                 1024: {
//                   slidesPerView: 3.2,
//                   spaceBetween: 26,
//                   slidesPerGroup: 3
//                 }
//               }}
//               navigation={{
//                 prevEl: '.custom-swiper-button-prev',
//                 nextEl: '.custom-swiper-button-next',
//               }}
//               pagination={false}
//               autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//               }}
//               loop={true}
//               className="mySwiper"
//               onSlideChange={handleSlideChange}
//             >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="rounded-lg shadow-md h-auto md:h-auto">
//                     <Image 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="rounded-lg shadow-md h-full w-full"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Custom Navigation Buttons Outside Swiper */}
//             <div className="custom-swiper-button-prev absolute left-16 top-1/2 -translate-y-1/2 z-10 lg:block hidden">
//               <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
//                 <RiArrowLeftSLine size={24} />
//               </button>
//             </div>
//             <div className="custom-swiper-button-next absolute right-16 top-1/2 -translate-y-1/2 z-10 lg:block hidden">
//               <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
//                 <RiArrowRightSLine size={24} />
//               </button>
//             </div>
//           </div>

//           {/* Custom Pagination Outside Swiper - Hidden on Mobile */}
//           <div className="hidden lg:flex justify-center mt-8 space-x-2 py-5">
//             {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full transition-all duration-300 shadow-md cursor-pointer
//                   ${index === activeIndex ? "w-4 h-4 bg-[#FF4C00] scale-125" : "w-3 h-3 bg-[#FF4C00]"}`}
//                 onClick={() => handlePaginationClick(index)}
//               />
//             ))}
//           </div>

//           <style jsx global>{`
//             .custom-swiper-container {
//               position: relative;
//             }

//             .swiper {
//               padding: 0 15px;
//             }

//             @media (max-width: 1024px) {
//               .swiper {
//                 padding: 0;
//               }
//             }
//           `}</style>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestOffer;




import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Img1 from "@/public/Images/homeImg/posters.webp"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: Img1, alt: "Offer 1" },
  { src: Img1, alt: "Offer 1" },
  { src: Img1, alt: "Offer 1" },
  { src: Img1, alt: "Offer 1" },
  { src: Img1, alt: "Offer 1" },
  { src: Img1, alt: "Offer 1" },

  
];

const HeroHome = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // For desktop, multiply index by 3 since we show 3 slides at a time
      const slideIndex = window.innerWidth >= 1024 ? index * 3 : index;
      swiperRef.current.swiper.slideTo(slideIndex);
      setActiveIndex(index);
    }
  };

  const handleSlideChange = (swiper) => {
    // For desktop, divide realIndex by 3 since we show 3 slides at a time
    const newIndex = window.innerWidth >= 1024 ? 
      Math.floor(swiper.realIndex / 3) : 
      swiper.realIndex;
    setActiveIndex(newIndex);
  };

  return (
    <section className="relative  h-auto md:h-[42rem] lg:h-[39rem] bg-[#F1FFB6]">
      <div className="container mx-auto text-center pt-20 md:pt-36 ">
        <div className="relative mt-8  ">
          <div className=" custom-swiper-container px-4 md:px-20">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1.2}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 26,
                  slidesPerGroup: 3
                }
              }}
              navigation={{
                prevEl: '.custom-swiper-button-prev',
                nextEl: '.custom-swiper-button-next',
              }}
              pagination={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="mySwiper"
              onSlideChange={handleSlideChange}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg  h-auto md:h-auto">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      className="rounded-lg shadow-md h-full w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons Outside Swiper */}
            <div className="custom-swiper-button-prev absolute left-16 top-32 -translate-y-1/2 z-10 lg:block hidden">
              <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
                <RiArrowLeftSLine size={24} />
              </button>
            </div>
            <div className="custom-swiper-button-next absolute right-16 top-32 -translate-y-1/2 z-10 lg:block hidden">
              <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
                <RiArrowRightSLine size={24} />
              </button>
            </div>
          </div>

          {/* Custom Pagination Outside Swiper - Hidden on Mobile */}
          <div className="hidden  lg:flex justify-center mt-8 space-x-2 py-5">
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
              <span
                key={index}
                className={`rounded-full transition-all duration-300 shadow-md cursor-pointer
                  ${index === activeIndex ? "w-4 h-4 bg-[#FF4C00] scale-125" : "w-3 h-3 bg-[#FF4C00]"}`}
                onClick={() => handlePaginationClick(index)}
              />
            ))}
          </div>

          <style jsx global>{`
            .custom-swiper-container {
              position: relative;
            }

            .swiper {
              padding: 0 10px;
            }

            @media (max-width: 1024px) {
              .swiper {
                padding: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;