// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
// import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
// import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";

// import Banner from "../../public/Images/homeImg/bottomImg.svg";


// const images = [
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
// ];

// const BestOffer = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const groupSize = 3; // Number of images per slide
//   const totalSlides = Math.ceil(images.length / groupSize);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   // Auto-slide every 1600ms
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <section className="relative py-10 md:h-[40rem]">
//       {/* Banner Section */}
//         <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3  ">
//             <Image
//               src={Banner}
//               alt="Bottom Banner"
//               className="block mx-auto"
//               layout="responsive"
//             />
//           </div>
//       <div className="container mx-auto text-center px-4 py-10 md:pt-36">
//         <h4 className="text-gray-500 uppercase text-sm">Where do you want to go</h4>
//         <h2 className="text-3xl font-semibold text-gray-900 font-Playfair-Display">
//           Find best offers everytime
//         </h2>

//         <div className="relative flex items-center justify-center mt-8 ">
//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-8 z-10 bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600 lg:block hidden"
//           >
//             <RiArrowLeftSLine size={24} />
//           </button>

//           {/* Image Carousel */}
//           <div className="overflow-hidden md:w-[90%] ">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//                 <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-4">
//                   {images
//                     .slice(slideIndex * groupSize, slideIndex * groupSize + groupSize)
//                     .map((image, index) => (
//                       <div key={index} className="md:w-1/3  ">
//                         <Image
//                           src={image.src}
//                           alt={image.alt}
//                           className="rounded-lg shadow-md"
//                         />
//                       </div>
//                     ))}
//                 </div>
//               ))}
//             </div>
//           </div>



//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute right-8 z-10 bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600 lg:block hidden"
//           >
//             <RiArrowRightSLine size={24} />
//           </button>
//         </div>

//         {/* Dots Indicator with Scale Animation */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <span
//               key={index}
//               className={`rounded-full transition-all duration-300 shadow-md  ${
//                 index === currentIndex
//                   ? "w-4 h-4 bg-[#FF4C00] scale-125 "
//                   : "w-3 h-3 bg-[#FF4C00]"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestOffer;

// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
// import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
// import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = [
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img3, alt: "Offer 3" },
// ];

// const BestOffer = () => {
//   return (
//     <section className="relative py-10 md:h-[40rem]">
//       {/* Banner Section */}
//       <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3">
//         <Image src={Banner} alt="Bottom Banner" className="block mx-auto" layout="responsive" />
//       </div>

//       <div className="container mx-auto text-center  py-10 md:pt-36 bg-orange-300">
//         <h4 className="text-gray-500 uppercase text-sm">Where do you want to go</h4>
//         <h2 className="text-3xl font-semibold text-gray-900 font-Playfair-Display">
//           Find best offers everytime
//         </h2>

//         <div className="relative mt-8 bg-blue-500">
//           <div className="custom-swiper-container px-4 md:px-20 bg-green-400 ">
//             <Swiper
//               modules={[Navigation, Pagination, Autoplay]}
//               spaceBetween={20}
//               slidesPerView={1}
//               breakpoints={{
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 20
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
//             >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="rounded-lg shadow-md">
//                     <Image 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="rounded-lg shadow-md"
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

//           {/* Custom Pagination Outside Swiper */}
//           <div className="flex justify-center mt-8 space-x-2 bg-red-400">
//             {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full transition-all duration-300 shadow-md cursor-pointer
//                   ${index === 0 ? "w-4 h-4 bg-[#FF4C00] scale-125" : "w-3 h-3 bg-[#FF4C00]"}`}
//                 onClick={() => {
//                   const swiper = document.querySelector('.mySwiper').swiper;
//                   swiper.slideTo(index * 3);
//                 }}
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




// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
// import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
// import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = [
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img3, alt: "Offer 3" },
// ];

// const BestOffer = () => {
//   return (
//     <section className="relative py-10 md:h-[40rem]">
//       {/* Banner Section */}
//       <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3">
//         <Image src={Banner} alt="Bottom Banner" className="block mx-auto" layout="responsive" />
//       </div>

//       <div className="container mx-auto text-center py-10 md:pt-36 ">
//         <h4 className="text-gray-500 uppercase text-sm">Where do you want to go</h4>
//         <h2 className="text-3xl font-semibold text-gray-900 font-Playfair-Display">
//           Find best offers everytime
//         </h2>

//         <div className="relative mt-8 ">
//           <div className="custom-swiper-container px-4 md:px-20 ">
//             <Swiper
//               modules={[Navigation, Pagination, Autoplay]}
//               spaceBetween={20}
//               slidesPerView={1.2}
//               breakpoints={{
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 20
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
//             >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="rounded-lg shadow-md">
//                     <Image 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="rounded-lg shadow-md"
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

//           {/* Custom Pagination Outside Swiper */}
//           <div className="flex justify-center mt-8 space-x-2 ">
//             {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full transition-all duration-300 shadow-md cursor-pointer
//                   ${index === 0 ? "w-4 h-4 bg-[#FF4C00] scale-125" : "w-3 h-3 bg-[#FF4C00]"}`}
//                 onClick={() => {
//                   const swiper = document.querySelector('.mySwiper').swiper;
//                   swiper.slideTo(index * 3);
//                 }}
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


// import Image from "next/image";
// import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
// import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
// import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
// import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const images = [
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img1, alt: "Offer 1" },
//   { src: Img2, alt: "Offer 2" },
//   { src: Img3, alt: "Offer 3" },
//   { src: Img3, alt: "Offer 3" },
// ];

// const BestOffer = () => {
//   return (
//     <section className="relative py-10 md:h-[40rem]">
//       {/* Banner Section */}
//       <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3">
//         <Image src={Banner} alt="Bottom Banner" className="block mx-auto" layout="responsive" />
//       </div>

//       <div className="container mx-auto text-center py-10 md:pt-36 ">
//         <h4 className="text-gray-500 uppercase text-sm">Where do you want to go</h4>
//         <h2 className="text-3xl font-semibold text-gray-900 font-Playfair-Display">
//           Find best offers everytime
//         </h2>

//         <div className="relative mt-8 ">
//           <div className="custom-swiper-container px-4 md:px-20 ">
//             <Swiper
//               modules={[Navigation, Pagination, Autoplay]}
//               spaceBetween={20}
//               slidesPerView={1.2}
//               breakpoints={{
//                 1024: {
//                   slidesPerView: 3,
//                   spaceBetween: 20
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
//             >
//               {images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="rounded-lg shadow-md h-[70vw] md:h-auto">
//                     <Image 
//                       src={image.src} 
//                       alt={image.alt} 
//                       className="rounded-lg shadow-md h-full w-full "
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

//           {/* Custom Pagination Outside Swiper */}
//           <div className="flex justify-center mt-8 space-x-2 ">
//             {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`rounded-full transition-all duration-300 shadow-md cursor-pointer
//                   ${index === 0 ? "w-4 h-4 bg-[#FF4C00] scale-125" : "w-3 h-3 bg-[#FF4C00]"}`}
//                 onClick={() => {
//                   const swiper = document.querySelector('.mySwiper').swiper;
//                   swiper.slideTo(index * 3);
//                 }}
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
import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";
import Banner from "../../public/Images/homeImg/bottomImg.webp";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: Img1, alt: "Offer 1" },
  { src: Img2, alt: "Offer 2" },
  { src: Img3, alt: "Offer 3" },
  { src: Img1, alt: "Offer 1" },
  { src: Img2, alt: "Offer 2" },
  { src: Img3, alt: "Offer 3" },
  { src: Img1, alt: "Offer 1" },
  { src: Img2, alt: "Offer 2" },
  { src: Img3, alt: "Offer 3" },
];

const BestOffer = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const swiperRef = React.useRef(null);

  const handlePaginationClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const slideIndex = index * 3;
      swiperRef.current.swiper.slideTo(slideIndex);
      setActiveIndex(index);
    }
  };

  const handleSlideChange = (swiper) => {
    const newIndex = Math.floor(swiper.realIndex / 3);
    setActiveIndex(newIndex);
  };

  return (
    <section className="relative py-10 md:h-[40rem] h-[35rem] bg-white">
      {/* Banner Section */}
      <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3">
        <Image src={Banner} alt="Bottom Banner" className="block mx-auto" layout="responsive" />
      </div>

      <div className="container mx-auto text-center py-10 md:pt-36 ">
        <h4 className="text-gray-500 uppercase text-sm">Where do you want to go</h4>
        <h2 className="text-3xl font-semibold text-gray-900 font-Playfair-Display">
          Find best offers everytime
        </h2>

        <div className="relative mt-8 ">
          <div className="custom-swiper-container px-4 md:px-20 ">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
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
              slidesPerGroup={3}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg shadow-md h-[70vw] md:h-auto ">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      className="rounded-lg shadow-md h-full w-full "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons Outside Swiper */}
            <div className="custom-swiper-button-prev absolute left-16 top-1/2 -translate-y-1/2 z-10 lg:block hidden">
              <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
                <RiArrowLeftSLine size={24} />
              </button>
            </div>
            <div className="custom-swiper-button-next absolute right-16 top-1/2 -translate-y-1/2 z-10 lg:block hidden">
              <button className="bg-[#CCF32F] text-black p-3 rounded-full shadow-md hover:bg-green-600">
                <RiArrowRightSLine size={24} />
              </button>
            </div>
          </div>

          {/* Custom Pagination Outside Swiper */}
          <div className="flex justify-center mt-8 space-x-2 py-5">
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
              padding: 0 15px;
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

export default BestOffer;
