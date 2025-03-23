// "use client";

// import React from "react";
// import Image from "next/image";
// import HeroImg from "../../public/Images/HotelListIg/HeroImage.png";
// import locationIcon from "../../public/Images/homeImg/location-icon.png";
// import checkinout from "../../public/Images/HotelListIg/checkinLogo.png";
// import personLogo from "../../public/Images/HotelListIg/personLogo.png";


// const HeroSection = () => {
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
//         <div className="relative z-10 px-4 lg:w-2/3">
//           {/* Subtitle */}
//           <h2 className="text-sm md:text-base font-light mb-4">
//             We help people find low prices on hotels, homes and much more
//           </h2>

//           {/* Main Heading */}
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
//             Find your next perfect <br className="hidden md:block" /> stay here with us
//           </h1>

//           {/* Search Bar */}
//           <div className="relative w-full max-w-5xl mx-auto ">
//             <div className="flex flex-wrap items-center gap-4 rounded-lg">
//               {/* Location Input */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                 <Image
//                   src={locationIcon}
//                   alt="Location Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Hotel location?"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                 />
//               </div>

//               {/* Check-In Date */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 w-40">
//                 <Image
//                   src={checkinout}
//                   alt="Check-in Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2 cursor-pointer"
//                   onClick={() => document.getElementById('checkin-date').showPicker()}
//                 />
//                 <input
//                   id="checkin-date"
//                   type="text"
//                   placeholder="Check In Date"
//                   onFocus={(e) => {
//                     e.target.type = 'date';
//                     e.target.showPicker();
//                   }}
//                   onBlur={(e) => {
//                     if (!e.target.value) {
//                       e.target.type = 'text';
//                     }
//                   }}
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm placeholder-gray-500"
//                 />
//               </div>

//               {/* Check-Out Date */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 w-40">
//                 <Image
//                   src={checkinout}
//                   alt="Check-in Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2 cursor-pointer"
//                   onClick={() => document.getElementById('checkin-date').showPicker()}
//                 />
//                 <input
//                   id="checkin-date"
//                   type="text"
//                   placeholder="Check Out Date"
//                   onFocus={(e) => {
//                     e.target.type = 'date';
//                     e.target.showPicker();
//                   }}
//                   onBlur={(e) => {
//                     if (!e.target.value) {
//                       e.target.type = 'text';
//                     }
//                   }}
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm placeholder-gray-500"
//                 />
//               </div>

//               {/* Guests Input */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                 <Image
//                   src={personLogo}
//                   alt="Person Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="2 Adults - 0 Children - 0 Rooms"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                 />
//               </div>
//             </div>

//             {/* Search Button - Positioned absolute bottom right */}
//             <div className="absolute bottom-0 right-0 translate-y-[120%]">
//               <button className="bg-[#FF4D00] text-white px-8 py-3 text-sm md:text-base rounded-3xl hover:bg-orange-600">
//                 SEARCH
//               </button>
//             </div>

//             {/* "Your Wish Our Destination" */}
//             <div className="absolute -bottom-[43%] left-5 bg-lime-500 text-white text-xs px-4 py-1 rounded-bl-lg rounded-br-lg shadow-md">
//               Your Wish Our Destination
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// "use client";

// import React from "react";
// import Image from "next/image";
// import HeroImg from "../../public/Images/HotelListIg/HeroImage.png";
// import locationIcon from "../../public/Images/homeImg/location-icon.png";
// import checkinout from "../../public/Images/HotelListIg/checkinLogo.png";
// import personLogo from "../../public/Images/HotelListIg/personLogo.png";

// const HeroSection = () => {
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
//         <div className="relative z-10 px-4 lg:w-2/3">
//           {/* Subtitle */}
//           <h2 className="text-sm md:text-base font-light mb-4">
//             We help people find low prices on hotels, homes, and much more
//           </h2>

//           {/* Main Heading */}
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
//             Find your next perfect <br className="hidden md:block" /> stay here
//             with us
//           </h1>

//           {/* Search Bar */}
//           <div className="relative w-full max-w-5xl mx-auto">
//             {/* Inputs Section */}
//             <div className="flex flex-col md:flex-row gap-4 rounded-lg">
//               {/* Location Input */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                 <Image
//                   src={locationIcon}
//                   alt="Location Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Hotel location?"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                 />
//               </div>

//               {/* Check-In & Check-Out Dates */}
//               <div className="flex flex-col sm:flex-row gap-4 flex-1">
//                 {/* Check-In Date */}
//                 <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                   <Image
//                     src={checkinout}
//                     alt="Check-in Icon"
//                     width={20}
//                     height={20}
//                     className="text-gray-500 mr-2"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Check In Date"
//                     onFocus={(e) => {
//                       e.target.type = "date";
//                       e.target.showPicker();
//                     }}
//                     onBlur={(e) => {
//                       if (!e.target.value) {
//                         e.target.type = "text";
//                       }
//                     }}
//                     className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                   />
//                 </div>

//                 {/* Check-Out Date */}
//                 <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                   <Image
//                     src={checkinout}
//                     alt="Check-out Icon"
//                     width={20}
//                     height={20}
//                     className="text-gray-500 mr-2"
//                   />
//                   <input
//                     type="text"
//                     placeholder="Check Out Date"
//                     onFocus={(e) => {
//                       e.target.type = "date";
//                       e.target.showPicker();
//                     }}
//                     onBlur={(e) => {
//                       if (!e.target.value) {
//                         e.target.type = "text";
//                       }
//                     }}
//                     className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Guests Input */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1">
//                 <Image
//                   src={personLogo}
//                   alt="Person Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="2 Adults - 0 Children - 0 Rooms"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none text-sm"
//                 />
//               </div>
//             </div>

//             {/* Search Button */}
//             <div className="mt-4 flex justify-center">
//               <button className="bg-[#FF4D00] text-white px-8 py-3 text-sm md:text-base rounded-3xl hover:bg-orange-600">
//                 SEARCH
//               </button>
//             </div>

//             {/* "Your Wish Our Destination" */}
//             <div className="absolute -bottom-[43%] left-5 bg-lime-500 text-white text-xs px-4 py-1 rounded-bl-lg rounded-br-lg shadow-md">
//               Your Wish Our Destination
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// "use client";

// import React from "react";
// import Image from "next/image";
// import HeroImg from "../../public/Images/HotelListIg/HeroImagtwo.webp";
// import locationIcon from "../../public/Images/homeImg/location-icon.png";
// import checkinout from "../../public/Images/HotelListIg/checkinLogo.png";
// import personLogo from "../../public/Images/HotelListIg/personLogo.png";

// const HeroSection = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative h-[40rem] md:h-[40rem] lg:h-[52rem] flex items-center justify-center text-center text-white"
//         style={{
//           backgroundImage: `url(${HeroImg.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-blue-200 bg-opacity-5"></div>

//         {/* Content */}
//         <div className="relative z-10 px-4 lg:w-3/4">
//           {/* Subtitle */}
//           <h2 className="text-sm md:text-base font-light mb-4 font-Inter">
//             We help people find co-travelers and also structure their travel
//             plans
//           </h2>

//           {/* Main Heading */}
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-Playfair-Display">
//             Find your next perfect <br className="hidden md:block" /> stay here
//           </h1>

//           {/* Search Bar */}
//           <div className=" w-full max-w-5xl mx-auto">
//             <div className="flex flex-col md:flex-row gap-2 rounded-lg items-center md:items-stretch">
//               {/* Location Input */}
//               <div className="relative flex items-center bg-white rounded-3xl px-3 py-3 w-full">
//                 <Image
//                   src={locationIcon}
//                   alt="Location Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Hotel location?"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs font-Inter"
//                 />
//                 {/* "Your Wish Our Destination desktop" */}
//                 <div className="hidden lg:block absolute -bottom-[50%]  left-5 bg-[#CCF32F] text-[#0E3D4D]
//                  text-xs px-4 py-1 rounded-bl-lg rounded-br-lg  shadow-md font-Inter ">
//                   Your <span className="font-bold">Wish </span>  Our <span  className="font-bold"> Destination </span> 
//                 </div>
                  
//                 {/* "Your Wish Our Destination mobile" */}
//                 <div className="block lg:hidden  absolute -top-[52%]  left-5 bg-[#CCF32F] text-[#0E3D4D]
//                  text-xs px-4 py-1 rounded-tl-lg rounded-tr-lg  shadow-md font-Inter">
//                 Your <span className="font-bold">Wish </span>  Our <span  className="font-bold"> Destination </span> 
//                 </div>

//               </div>

              // {/* Check-In and Check-Out in One Row */}
              // <div className="flex gap-2 w-full">
              //   {/* Check-In Date */}
              //   <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1 w-1/2">
              //     <Image
              //       src={checkinout}
              //       alt="Check-in Icon"
              //       width={20}
              //       height={20}
              //       className="text-gray-500 mr-2 cursor-pointer"
              //       onClick={() =>
              //         document.getElementById("checkin-date").showPicker()
              //       }
              //     />
              //     <input
              //       id="checkin-date"
              //       type="text"
              //       placeholder="Check In Date"
              //       onFocus={(e) => {
              //         e.target.type = "date";
              //         e.target.showPicker();
              //       }}
              //       onBlur={(e) => {
              //         if (!e.target.value) {
              //           e.target.type = "text";
              //         }
              //       }}
              //       className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs placeholder-gray-500 font-Inter"
              //     />
              //   </div>

              //   {/* Check-Out Date */}
              //   <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1 w-1/2">
              //     <Image
              //       src={checkinout}
              //       alt="Check-out Icon"
              //       width={20}
              //       height={20}
              //       className="text-gray-500 mr-2 cursor-pointer"
              //       onClick={() =>
              //         document.getElementById("checkout-date").showPicker()
              //       }
              //     />
              //     <input
              //       id="checkout-date"
              //       type="text"
              //       placeholder="Check Out Date"
              //       onFocus={(e) => {
              //         e.target.type = "date";
              //         e.target.showPicker();
              //       }}
              //       onBlur={(e) => {
              //         if (!e.target.value) {
              //           e.target.type = "text";
              //         }
              //       }}
              //       className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs placeholder-gray-500 font-Inter"
              //     />
              //   </div>
              // </div>

//               {/* Guests Input */}
//               <div className="flex items-center bg-white rounded-3xl px-3 py-3 w-full">
//                 <Image
//                   src={personLogo}
//                   alt="Person Icon"
//                   width={20}
//                   height={20}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="2 Adults - 0 Children - 0 Rooms"
//                   className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs font-Inter"
//                 />
//               </div>
//             </div>

//             {/* Search Button */}
//             <div className="mt-4 flex md:justify-end justify-center">
//               <button className="bg-[#FF4D00] text-white px-8 py-3 text-sm md:text-base rounded-3xl hover:bg-orange-600 font-Inter">
//                 SEARCH
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HeroImg from "../../public/Images/HotelListIg/HeroImagtwo.webp";
import locationIcon from "../../public/Images/homeImg/location-icon.png";
import checkinout from "../../public/Images/HotelListIg/checkinLogo.png";
import personLogo from "../../public/Images/HotelListIg/personLogo.png";

const HeroSection = () => {
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const guestRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setIsGuestOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[40rem] md:h-[40rem] lg:h-[52rem] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${HeroImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-200 bg-opacity-5"></div>

        {/* Content */}
        <div className="relative z-10 px-4 lg:w-3/4">
          {/* Subtitle */}
          <h2 className="text-sm md:text-base font-light mb-4 font-Inter">
            We help people find co-travelers and also structure their travel plans
          </h2>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-Playfair-Display">
            Find your next perfect <br className="hidden md:block" /> stay here
          </h1>

          {/* Search Bar */}
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-2 rounded-lg items-center md:items-stretch">
              {/* Location Input */}
              <div className="relative flex items-center bg-white rounded-3xl px-3 py-3 w-full">
                <Image src={locationIcon} alt="Location Icon" width={20} height={20} className="text-gray-500 mr-2" />
                <input type="text" placeholder="Hotel location?" className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs font-Inter" />
              </div>

              {/* Check-In and Check-Out in One Row */}
           {/* Check-In and Check-Out in One Row */}
           <div className="flex gap-2 w-full">
                {/* Check-In Date */}
                <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1 w-1/2">
                  <Image
                    src={checkinout}
                    alt="Check-in Icon"
                    width={20}
                    height={20}
                    className="text-gray-500 mr-2 cursor-pointer"
                    onClick={() =>
                      document.getElementById("checkin-date").showPicker()
                    }
                  />
                  <input
                    id="checkin-date"
                    type="text"
                    placeholder="Check In Date"
                    onFocus={(e) => {
                      e.target.type = "date";
                      e.target.showPicker();
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = "text";
                      }
                    }}
                    className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs placeholder-gray-500 font-Inter"
                  />
                </div>

                {/* Check-Out Date */}
                <div className="flex items-center bg-white rounded-3xl px-3 py-3 flex-1 w-1/2">
                  <Image
                    src={checkinout}
                    alt="Check-out Icon"
                    width={20}
                    height={20}
                    className="text-gray-500 mr-2 cursor-pointer"
                    onClick={() =>
                      document.getElementById("checkout-date").showPicker()
                    }
                  />
                  <input
                    id="checkout-date"
                    type="text"
                    placeholder="Check Out Date"
                    onFocus={(e) => {
                      e.target.type = "date";
                      e.target.showPicker();
                    }}
                    onBlur={(e) => {
                      if (!e.target.value) {
                        e.target.type = "text";
                      }
                    }}
                    className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs placeholder-gray-500 font-Inter"
                  />
                </div>
              </div>

              {/* Guests Input with Dropdown */}
              <div className="relative w-full" ref={guestRef}>
                <div className="flex items-center bg-white rounded-3xl px-3 py-3 cursor-pointer" onClick={() => setIsGuestOpen(!isGuestOpen)}>
                  <Image src={personLogo} alt="Person Icon" width={20} height={20} className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    readOnly
                    value={`${adults} Adults - ${children} Children - ${rooms} Rooms`}
                    className="w-full bg-transparent text-gray-700 focus:outline-none md:text-sm text-xs font-Inter cursor-pointer"
                  />
                </div>

                {/* Dropdown */}
                {isGuestOpen && (
                  <div className="absolute bottom-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-20 p-4">
                    {/* Adults */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Adults</span>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => setAdults(Math.max(1, adults - 1))} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">-</button>
                        <span className="text-black">{adults}</span>
                        <button onClick={() => setAdults(adults + 1)} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">+</button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-700">Children</span>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => setChildren(Math.max(0, children - 1))} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">-</button>
                        <span className="text-black">{children}</span>
                        <button onClick={() => setChildren(children + 1)} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">+</button>
                      </div>
                    </div>

                    {/* Rooms */}
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Rooms</span>
                      <div className="flex items-center space-x-2">
                        <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">-</button>
                        <span className="text-black">{rooms}</span>
                        <button onClick={() => setRooms(rooms + 1)} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-4 flex md:justify-end justify-center">
              <button className="bg-[#FF4D00] text-white px-8 py-3 text-sm md:text-base rounded-3xl hover:bg-orange-600 font-Inter">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


