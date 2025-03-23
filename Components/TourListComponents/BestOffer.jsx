import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Img1 from "@/public/Images/homeImg/bestoffer/img1.png";
import Img2 from "@/public/Images/homeImg/bestoffer/img2.png";
import Img3 from "@/public/Images/homeImg/bestoffer/img3.png";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { src: Img1, alt: "Offer 1" },
  { src: Img2, alt: "Offer 2" },
  { src: Img3, alt: "Offer 3" },
  { src: Img2, alt: "Offer 2" },
 
  { src: Img1, alt: "Offer 1" },
  { src: Img3, alt: "Offer 3" },
  { src: Img1, alt: "Offer 1" },
  { src: Img2, alt: "Offer 2" },
  { src: Img3, alt: "Offer 3" },
  { src: Img2, alt: "Offer 2" },
 
  { src: Img1, alt: "Offer 1" },
  { src: Img3, alt: "Offer 3" },
 
  
  
  
];

const BestOffer = () => {
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
    <section className="relative pt-10 md:h-[25rem] h-[35rem]">
     

      <div className="container mx-auto text-center py-10 md:pt-6 ">
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
                  spaceBetween: 20,
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
              slidesPerGroup={1}
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
