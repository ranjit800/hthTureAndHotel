// import Image from "next/image";
// import React from "react";
// import layoutImg1 from "@/public/Images/HotelPageImg/layoutImg1.webp";
// import layoutImg2 from "@/public/Images/HotelPageImg/layoutImg2.webp";
// import layoutImg3 from "@/public/Images/HotelPageImg/layoutImg3.webp";
// import layoutImg4 from "@/public/Images/HotelPageImg/layoutImg4.webp";
// import locationIcon from "@/public/Images/HotelPageImg/locationIcon.png";
// import PlayButton from "@/public/Images/HotelPageImg/PlayButton.png";
// import { RiUser3Line, RiPhoneLine, RiChat3Line } from "react-icons/ri"; // Remix Icons

// const ToureOverview = () => {
//   return (
//     <section className="bg-gradient-to-b from-lime-100 to-white">
//       <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative">
//           {/* Left Content Section */}
//           <div className="lg:col-span-2">
//             {/* Tour Overview */}
//             <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
//               Tour overview
//             </h2>
//             <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
//               There are many variations of passages of Lorem Ipsum available but
//               the majority have suffered alteration in some form by injected
//               humour orbit arandomised words which don't look even slightly
//               believable. If you are going to use a passage of Lorem Ipsum, you
//               need to be sure there isn't.
//             </p>
//             <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
//               There are many variations of passages of Lorem Ipsum available but
//               the majority have suffered alteration in some form by injected
//               humour orbit arandomised words which don't look even slightly
//               believable. If you are going to use a passage.
//             </p>

//             {/* Tour Highlights */}
//             <div className="mt-6 sm:mt-8">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
//                 Tour Highlights
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
//                 {[
//                   "Experience The Thrill of a Speed Boat.",
//                   "Be Amazed The Best of Marine Life.",
//                   "Get Relaxing Paradise With White Sand Beaches.",
//                   "Feel The Comfort Tour Limited 35 Passengers.",
//                   "Catch Glimpse of Wild Tigers.",
//                   "Experience The Thrill of a Speed Boat.",
//                   "Be Amazed The Best of Marine Life.",
//                   "Get Relaxing Paradise With White Sand Beaches.",
//                   "Feel The Comfort Tour Limited 35 Passengers.",
//                   "Catch Glimpse of Wild Tigers.",
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-3 text-sm sm:text-base"
//                   >
//                     <div
//                       id="checkBox"
//                       className="min-w-[18px] min-h-[18px] sm:min-w-[20px] sm:min-h-[20px] w-5 h-5 border-2 border-green-500 bg-yellow-200 rounded-md"
//                     ></div>
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* What's Included */}
//             <div className="mt-6 sm:mt-8">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
//                 What's Included
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
//                 {[
//                   {
//                     text: "Beverages, Drinking Water, Morning Tea Lunch",
//                     color: "bg-[#FF4C00]",
//                   },
//                   { text: "Local Taxes", color: "bg-[#FF4C00]" },
//                   { text: "Hotel Pickup and Drop Off", color: "bg-[#FF4C00]" },
//                   {
//                     text: "Insurance Transfer To a Private Pier",
//                     color: "bg-[#FF4C00]",
//                   },
//                   { text: "Extensive Tour Guide", color: "bg-[#FF4C00]" },
//                   { text: "Cosmetics For Grooming", color: "bg-[#FF4C00]" },
//                   { text: "Night Outing Costs", color: "bg-[#FF4C00]" },
//                   { text: "Alcoholic Beverages", color: "bg-[#FF4C00]" },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-3 text-sm sm:text-base"
//                   >
//                     <div
//                       className={`min-w-[18px] min-h-[18px] sm:min-w-[20px] sm:min-h-[20px] w-5 h-5 border-2 border-orange-500 rounded-md ${item.color}`}
//                     ></div>
//                     <span className="text-gray-700">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tour Itinerary */}
//             <div className="mt-6 sm:mt-8">
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
//                 Tour Itinerary
//               </h3>
//               <div className="mt-4 sm:mt-6 relative">
//                 {/* Timeline Line */}
//                 <div className="absolute left-2 sm:left-2.5 top-0 w-1 h-full bg-transparent border-l-2 border-dotted border-orange-400"></div>

//                 {[
//                   "Airport Pick Up",
//                   "Temples and River Cruise",
//                   "Massage and Overnight Train",
//                   "Khao Sok National Park",
//                   "Travel To Koh Phangan",
//                   "Morning Chill and Mua Thai Lesson",
//                   "Island Boat Trip",
//                 ].map((item, index, arr) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-4 sm:space-x-6 relative"
//                   >
//                     {/* Timeline Indicator */}
//                     <div className="flex flex-col items-center">
//                       <div
//                         className={`w-4 h-4 sm:w-5 sm:h-5 ${
//                           index === 0 || index === arr.length - 1
//                             ? "bg-orange-500"
//                             : "bg-white border-2 border-orange-400"
//                         } rounded-full flex items-center justify-center`}
//                       ></div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 py-3 sm:py-4">
//                       <div className="bg-white shadow-md px-3 sm:px-4 py-1 rounded-full text-gray-800 font-semibold text-xs sm:text-sm w-fit">
//                         DAY {index + 1}
//                       </div>
//                       <span className="text-gray-700 text-base sm:text-lg">
//                         {item}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

           

            
//           </div>

          

//           {/* Quote Form Section */}
//           <div className="mt-6 lg:mt-0 lg:absolute lg:right-10 lg:-top-40 bg-white shadow-lg rounded-lg w-full lg:w-80 border overflow-hidden">
//             {/* Price Section */}
//             <div className="bg-teal-900 text-white p-4 sm:p-5">
//               <p className="text-base sm:text-lg font-bold">
//                 Rs. 45,000/-{" "}
//                 <span className="text-gray-300 line-through text-xs sm:text-sm">
//                   Rs. 1,200/-
//                 </span>
//               </p>
//               <p className="text-xs sm:text-sm">Per person</p>
//             </div>

//             {/* Form Section */}
//             <div className="p-4 sm:p-6">
//               <h3 className="text-base sm:text-lg font-semibold text-indigo-900">
//                 Get Latest Quote Now
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
//                 Fill the form below to get best price in your favorite
//                 destination
//               </p>

//               {/* Name Field */}
//               <div className="mb-3">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700">
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
//                   <RiUser3Line className="text-gray-500 mr-2" />
//                   <input
//                     type="text"
//                     value="John Doe"
//                     readOnly
//                     className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Number Field */}
//               <div className="mb-3">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700">
//                   Number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
//                   <RiPhoneLine className="text-gray-500 mr-2" />
//                   <input
//                     type="text"
//                     value="+91 00000 - 00000"
//                     readOnly
//                     className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div className="mb-4">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
//                   <RiChat3Line className="text-gray-500 mr-2" />
//                   <input
//                     type="email"
//                     value="name@mail.com"
//                     readOnly
//                     className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 transition">
//                 GET QUOTE NOW
//               </button>

//               {/* Terms and Conditions */}
//               <p className="text-[10px] sm:text-xs text-center text-indigo-600 mt-3 cursor-pointer hover:underline">
//                 * Agree Terms and Conditions
//               </p>
//             </div>
//           </div>
//         </div>
      
//       </div>
//     </section>
//   );
// };

// export default ToureOverview;



  
"use client"

import Image from "next/image";
import React, { useState } from "react";
import layoutImg1 from "@/public/Images/TourDetailsImg/Gimg1.png";
import layoutImg2 from "@/public/Images/TourDetailsImg/Gimg2.png";
import layoutImg3 from "@/public/Images/TourDetailsImg/Gimg3.png";
import layoutImg4 from "@/public/Images/TourDetailsImg/Gimg4.png";
import locationIcon from "@/public/Images/HotelPageImg/locationIcon.png";
import PlayButton from "@/public/Images/HotelPageImg/PlayButton.png";
import { RiUser3Line, RiPhoneLine, RiChat3Line } from "react-icons/ri"; // Remix Icons

const ToureOverview = () => {
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
    <section className="bg-gradient-to-b from-[#F1FFB6] via-white  to-[#F1FFB6]">
      <div className="container mx-auto px-4 sm:px-6 pb-20 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative pt-4">
          {/* Left Content Section */}
          <div className="lg:col-span-2">
            {/* Tour Overview */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              Tour overview
            </h2>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form by injected
              humour orbit arandomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't.
            </p>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form by injected
              humour orbit arandomised words which don't look even slightly
              believable. If you are going to use a passage.
            </p>

            {/* Tour Highlights */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Tour Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                {[
                  "Experience The Thrill of a Speed Boat.",
                  "Be Amazed The Best of Marine Life.",
                  "Get Relaxing Paradise With White Sand Beaches.",
                  "Feel The Comfort Tour Limited 35 Passengers.",
                  "Catch Glimpse of Wild Tigers.",
                  "Experience The Thrill of a Speed Boat.",
                  "Be Amazed The Best of Marine Life.",
                  "Get Relaxing Paradise With White Sand Beaches.",
                  "Feel The Comfort Tour Limited 35 Passengers.",
                  "Catch Glimpse of Wild Tigers.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-sm sm:text-base"
                  >
                    <div
                      id="checkBox"
                      className="min-w-[18px] min-h-[18px] sm:min-w-[20px] sm:min-h-[20px] w-5 h-5 border-2 border-green-500 bg-yellow-200 rounded-md"
                    ></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                What's Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                {[
                  {
                    text: "Beverages, Drinking Water, Morning Tea Lunch",
                    color: "bg-[#FF4C00]",
                  },
                  { text: "Local Taxes", color: "bg-[#FF4C00]" },
                  { text: "Hotel Pickup and Drop Off", color: "bg-[#FF4C00]" },
                  {
                    text: "Insurance Transfer To a Private Pier",
                    color: "bg-[#FF4C00]",
                  },
                  { text: "Extensive Tour Guide", color: "bg-[#FF4C00]" },
                  { text: "Cosmetics For Grooming", color: "bg-[#FF4C00]" },
                  { text: "Night Outing Costs", color: "bg-[#FF4C00]" },
                  { text: "Alcoholic Beverages", color: "bg-[#FF4C00]" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-sm sm:text-base"
                  >
                    <div
                      className={`min-w-[18px] min-h-[18px] sm:min-w-[20px] sm:min-h-[20px] w-5 h-5 border-2 border-orange-500 rounded-md ${item.color}`}
                    ></div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour Itinerary */}
            <div className="mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                Tour Itinerary
              </h3>
              <div className="mt-4 sm:mt-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-2 sm:left-2.5 top-0 w-1 h-full bg-transparent border-l-2 border-dotted border-orange-400"></div>

                {[
                  "Airport Pick Up",
                  "Temples and River Cruise",
                  "Massage and Overnight Train",
                  "Khao Sok National Park",
                  "Travel To Koh Phangan",
                  "Morning Chill and Mua Thai Lesson",
                  "Island Boat Trip",
                ].map((item, index, arr) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 sm:space-x-6 relative"
                  >
                    {/* Timeline Indicator */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          index === 0 || index === arr.length - 1
                            ? "bg-orange-500"
                            : "bg-white border-2 border-orange-400"
                        } rounded-full flex items-center justify-center`}
                      ></div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 py-3 sm:py-4">
                      <div className="bg-white shadow-md px-3 sm:px-4 py-1 rounded-full text-gray-800 font-semibold text-xs sm:text-sm w-fit">
                        DAY {index + 1}
                      </div>
                      <span className="text-gray-700 text-base sm:text-lg">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote Form Section */}
          <div className="mt-6 lg:mt-0 lg:absolute lg:right-10 lg:-top-56 bg-white shadow-lg rounded-xl w-full lg:w-80  overflow-hidden md:block hidden">
            {/* Price Section */}
            <div className="bg-teal-900 text-white p-4 sm:p-5">
              <p className="text-base sm:text-lg font-bold">
                Rs. 45,000/-{" "}
                <span className="text-gray-300 line-through text-xs sm:text-sm">
                  Rs. 1,200/-
                </span>
              </p>
              <p className="text-xs sm:text-sm">Per person</p>
            </div>

            {/* Form Section */}
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-indigo-900">
                Get Latest Quote Now
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Fill the form below to get best price in your favorite
                destination
              </p>

              {/* Name Field */}
              <div className="mb-3">
                <label className="text-xs sm:text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
                  <RiUser3Line className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="John Doe"
                   
                    className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
                  />
                </div>
              </div>

              {/* Number Field */}
              <div className="mb-3">
                <label className="text-xs sm:text-sm font-medium text-gray-700">
                  Number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
                  <RiPhoneLine className="text-gray-500 mr-2" />
                  <input
                    type="number"
                    placeholder="+91 00000 - 00000"
                    
                    className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label className="text-xs sm:text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded-lg p-2 mt-1 bg-gray-100">
                  <RiChat3Line className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="name@mail.com"
                    
                    className="w-full bg-transparent focus:outline-none text-gray-600 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-orange-500 text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-orange-600 transition">
                GET QUOTE NOW
              </button>

              {/* Terms and Conditions */}
              <p className="text-[10px] sm:text-xs text-center text-indigo-600 mt-3 cursor-pointer hover:underline">
                * Agree Terms and Conditions
              </p>
            </div>
          </div>
        </div>
        {/* Layout Section */}
        <div className=" h-auto md:h-[40rem] lg:h-[35rem]  flex md:flex-row flex-col md:gap-4 gap-2 md:mt-10 pt-20  mb-6 md:px-0 px-0">
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

            <button className="absolute bottom-2 md:left-[30%] right-4 p-2 rounded-full  transition">
              <Image src={PlayButton} alt="Play" width={40} height={40} />
            </button>
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
                className="rounded-lg w-full h-full object-cover shadow-lg "
              />
            </div>

            {/* Bottom Images */}
            <div className="h-1/2 flex md:gap-4 gap-2">
              <div className="w-1/2">
                <Image
                  src={layoutImg3}
                  alt="Room"
                  className="rounded-lg w-full h-full object-cover shadow-lg "
                />
              </div>
              <div className="w-1/2">
                <Image
                  src={layoutImg4}
                  alt="Room"
                  className="rounded-lg w-full h-full object-cover shadow-lg "
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
                  height={Math.round(
                    galleryImages[currentImageIndex].width * 0.75
                  )}
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
    </section>
  );
};

export default ToureOverview;

