// "use client";

// import React from "react";
// import Image from "next/image";
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

// const NextStay = () => {
//   const hotelData = [
//     { name: "Blu Plaza", location: "Mumbai, Maharashtra", price: "Rs. 5,000/-", image: BluPlaza },
//     { name: "Falaknuma Palace", location: "Hyderabad, Telangana", price: "Rs. 6,000/-", image: Falaknuma },
//     { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
//     { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
//     { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
//     { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
//     { name: "The Oberoi", location: "Gurgaon, Haryana", price: "Rs. 10,000/-", image: Oberoi },
//     { name: "Royel Stay", location: "Jaipur, Rajasthan", price: "Rs. 6,500/-", image: Royel },
//     { name: "Taj Mahal View", location: "Agra, Uttar Pradesh", price: "Rs. 12,000/-", image: TajMahal },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14] py-10">
//       <div id="main" className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <p className="text-sm uppercase tracking-wider text-gray-500 font-Inter">
//             WHERE DO YOU WANT TO GO
//           </p>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-Playfair-Display">
//             Find your next stay
//           </h1>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="lg:w-1/4 h-1/2   rounded-2xl shadow-lg border border-gray-400 font-Inter">
//             {/* Top Section with Orange Background */}
//             <div className="bg-[#FF4D00] rounded-t-2xl  p-6 hidden lg:block">
//               <h2 className="text-lg font-bold text-white mb-6 ">
//                 Find The Best Hotel
//               </h2>
//               <button className="bg-white text-[#FF4D00] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 w-full">
//                 EXPERT GUIDE
//               </button>
//             </div>

//             {/* Filters Section */}
//             {/* <div className="p-6 space-y-6 hidden lg:block"> */}
//             <div className="p-6 space-y-6 ">

//               {/* Facilities Section */}
//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Facilities</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                         defaultChecked
//                       />
//                       <span className="ml-2 text-gray-700">Parking</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Restaurant</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                         defaultChecked
//                       />
//                       <span className="ml-2 text-gray-700">Fitness Centre</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Free Wifi</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Swimming Pool</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Pets Allowed</span>
//                     </label>
//                   </li>
//                 </ul>
//                 <button className="text-[#FF4D00] hover:underline text-sm mt-2">
//                   See More
//                 </button>
//               </div>

//               {/* Other Filters */}
//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">
//                   Filter Price
//                 </h3>
//                 <div className="h-[1px] bg-gray-200 w-full rounded"></div>
//               </div>

//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Rating</h3>
//                 <div className="h-[1px] bg-gray-200 w-full rounded"></div>
//               </div>

//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Specials</h3>
//                 {/* <div className="h-[1px] bg-gray-200 w-full rounded"></div> */}
//               </div>
//             </div>
//           </div>

//           {/* Hotel Cards */}
//           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-Inter">
//             {hotelData.map((hotel, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <div className="relative">
//                   <Image
//                     src={hotel.image}
//                     alt={hotel.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   {/* <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
//                     4.5 (23)
//                   </div> */}
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
//                 <span className="text-[#FF4C00] text-sm font-semibold">★</span>
//                 <span className="text-sm font-medium">4.5 (23)</span>
                
//               </div>
//                 </div>
//                 <div className="p-4 relative">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                     {hotel.name}
//                   </h3>
//                   <p className="text-[#FF4D00] font-bold mb-2">
//                     {hotel.price} <span className="text-gray-800 text-base font-light">Per Night</span> 
//                   </p>
//                   <div className="flex items-center text-gray-500 text-sm mb-4">
//                     <Image src={locationIcon} alt="Location" width={16} height={16} className="mr-1" />
//                     <p>{hotel.location}</p>
//                   </div>
//                   <button className="absolute -top-[14%] left-4 bg-[#CCF32F]
//                    text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lime-600">
//                     SEE AVAILABILITY
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Buttons */}
//         <div className="flex justify-center items-center space-x-2 mt-10">
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             Previous
//           </button>
//           <button className="bg-[#FF4D00] text-white py-2 px-4 rounded-full shadow hover:bg-orange-600 transition duration-300">
//             1
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             2
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             3
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NextStay;


//===============================================


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
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

// const NextStay = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const hotelData = [
//     { name: "Blu Plaza", location: "Mumbai, Maharashtra", price: "Rs. 5,000/-", image: BluPlaza },
//     { name: "Falaknuma Palace", location: "Hyderabad, Telangana", price: "Rs. 6,000/-", image: Falaknuma },
//     { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
//     { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
//     { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
//     { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
//     { name: "The Oberoi", location: "Gurgaon, Haryana", price: "Rs. 10,000/-", image: Oberoi },
//     { name: "Royel Stay", location: "Jaipur, Rajasthan", price: "Rs. 6,500/-", image: Royel },
//     { name: "Taj Mahal View", location: "Agra, Uttar Pradesh", price: "Rs. 12,000/-", image: TajMahal },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14] py-10">
//       <div id="main" className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <p className="text-sm uppercase tracking-wider text-gray-500 font-Inter">
//             WHERE DO YOU WANT TO GO
//           </p>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-Playfair-Display">
//             Find your next stay
//           </h1>
//         </div>

//         {/* Mobile Filter Button */}
//         <div className="lg:hidden mb-6">
//           <button 
//             onClick={() => setIsFilterOpen(!isFilterOpen)}
//             className="w-full bg-[#FF4D00] text-white py-3 px-4 rounded-lg flex justify-between items-center"
//           >
//             <span>Filter Options</span>
//             <span>{isFilterOpen ? '▼' : '▲'}</span>
//           </button>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar - Hidden on mobile by default unless opened */}
//           <div className={`lg:w-1/4 h-1/2 rounded-2xl shadow-lg border border-gray-400 font-Inter ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
//             {/* Top Section with Orange Background */}
//             <div className="bg-[#FF4D00] rounded-t-2xl p-6 hidden lg:block">
//               <h2 className="text-lg font-bold text-white mb-6">
//                 Find The Best Hotel
//               </h2>
//               <button className="bg-white text-[#FF4D00] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 w-full">
//                 EXPERT GUIDE
//               </button>
//             </div>

//             {/* Filters Section */}
//             <div className="p-6 space-y-6">
//               {/* Facilities Section */}
//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Facilities</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                         defaultChecked
//                       />
//                       <span className="ml-2 text-gray-700">Parking</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Restaurant</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                         defaultChecked
//                       />
//                       <span className="ml-2 text-gray-700">Fitness Centre</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Free Wifi</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Swimming Pool</span>
//                     </label>
//                   </li>
//                   <li>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         className="form-checkbox text-lime-500"
//                       />
//                       <span className="ml-2 text-gray-700">Pets Allowed</span>
//                     </label>
//                   </li>
//                 </ul>
//                 <button className="text-[#FF4D00] hover:underline text-sm mt-2">
//                   See More
//                 </button>
//               </div>

//               {/* Other Filters */}
//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">
//                   Filter Price
//                 </h3>
//                 <div className="h-[1px] bg-gray-200 w-full rounded"></div>
//               </div>

//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Rating</h3>
//                 <div className="h-[1px] bg-gray-200 w-full rounded"></div>
//               </div>

//               <div>
//                 <h3 className="text-gray-800 font-semibold mb-2">Specials</h3>
//               </div>
//             </div>
//           </div>

//           {/* Hotel Cards */}
//           <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-Inter">
//             {hotelData.map((hotel, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden"
//               >
//                 <div className="relative">
//                   <Image
//                     src={hotel.image}
//                     alt={hotel.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
//                     <span className="text-[#FF4C00] text-sm font-semibold">★</span>
//                     <span className="text-sm font-medium">4.5 (23)</span>
//                   </div>
//                 </div>
//                 <div className="p-4 relative">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                     {hotel.name}
//                   </h3>
//                   <p className="text-[#FF4D00] font-bold mb-2">
//                     {hotel.price} <span className="text-gray-800 text-base font-light">Per Night</span> 
//                   </p>
//                   <div className="flex items-center text-gray-500 text-sm mb-4">
//                     <Image src={locationIcon} alt="Location" width={16} height={16} className="mr-1" />
//                     <p>{hotel.location}</p>
//                   </div>
//                   <button className="absolute -top-[14%] left-4 bg-[#CCF32F]
//                    text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lime-600">
//                     SEE AVAILABILITY
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination Buttons */}
//         <div className="flex justify-center items-center space-x-2 mt-10">
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             Previous
//           </button>
//           <button className="bg-[#FF4D00] text-white py-2 px-4 rounded-full shadow hover:bg-orange-600 transition duration-300">
//             1
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             2
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             3
//           </button>
//           <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NextStay;




"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import "remixicon/fonts/remixicon.css"; // Import Remix Icon styles

// const NextStay = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

  const NextStay = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [duration, setDuration] = useState(5);
    const [budget, setBudget] = useState(50000);
    const [flightOption, setFlightOption] = useState("With Flight");

  const hotelData = [
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
    <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14] py-10">
      <div id="main" className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-Inter">
            WHERE DO YOU WANT TO GO
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-Playfair-Display">
            Find your next stay
          </h1>
        </div>

        {/* Mobile Filter Button */}
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6 px-2">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
            <button 
              onClick={() => setIsFilterOpen(true)} 
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700"
            >
              <i className="ri-filter-3-line"></i> Filters
            </button>
{/* 
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Duration <i className="ri-arrow-down-s-line"></i>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Flights <i className="ri-arrow-down-s-line"></i>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Budget <i className="ri-arrow-down-s-line"></i>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Flights <i className="ri-arrow-down-s-line"></i>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Budget (Per person)<i className="ri-arrow-down-s-line"></i>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Hotel Category <i className="ri-arrow-down-s-line"></i>
            </button> */}

            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700">
              Cities<i className="ri-arrow-down-s-line"></i>
            </button>
          </div>
        </div>

        {/* Filter Popup Modal */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-lg h-full sm:h-auto sm:rounded-lg shadow-lg p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="text-gray-600 text-xl">
                  <i className="ri-close-line"></i>
                </button>
              </div>

              {/* Clear All */}
              <div className="text-right text-blue-600 font-semibold text-sm cursor-pointer">
                Clear All
              </div>

              {/* Duration Filter */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Duration in Nights</h3>
                <p className="text-gray-600 text-sm">{duration} N</p>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={duration} 
                  onChange={(e) => setDuration(e.target.value)} 
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Flight Options */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Flights</h3>
                <div className="flex gap-4 mt-2">
                  <button 
                    className={`flex-1 p-3 rounded-lg border ${flightOption === "With Flight" ? "bg-blue-600 text-white" : "border-gray-300"}`}
                    onClick={() => setFlightOption("With Flight")}
                  >
                    With Flight
                  </button>
                  <button 
                    className={`flex-1 p-3 rounded-lg border ${flightOption === "Without Flight" ? "bg-blue-600 text-white" : "border-gray-300"}`}
                    onClick={() => setFlightOption("Without Flight")}
                  >
                    Without Flight
                  </button>
                </div>
              </div>

              {/* Budget Filter */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Budget (per person)</h3>
                <p className="text-gray-600 text-sm">₹{budget.toLocaleString()}</p>
                <input 
                  type="range" 
                  min="5000" 
                  max="1611000" 
                  value={budget} 
                  onChange={(e) => setBudget(e.target.value)} 
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Apply Button */}
              <div className="mt-6">
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile by default unless opened */}
          <div className={`lg:w-1/4 h-1/2 rounded-2xl shadow-lg border border-gray-400 font-Inter ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            {/* Top Section with Orange Background */}
            <div className="bg-[#FF4D00] rounded-t-2xl p-6 hidden lg:block">
              <h2 className="text-lg font-bold text-white mb-6">
                Find The Best Hotel
              </h2>
              <button className="bg-white text-[#FF4D00] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 w-full">
                EXPERT GUIDE
              </button>
            </div>

            {/* Filters Section */}
            <div className="p-6 space-y-6">
              {/* Facilities Section */}
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">Facilities</h3>
                <ul className="space-y-2">
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">Parking</span>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                      />
                      <span className="ml-2 text-gray-700">Restaurant</span>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">Fitness Centre</span>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                      />
                      <span className="ml-2 text-gray-700">Free Wifi</span>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                      />
                      <span className="ml-2 text-gray-700">Swimming Pool</span>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-lime-500"
                      />
                      <span className="ml-2 text-gray-700">Pets Allowed</span>
                    </label>
                  </li>
                </ul>
                <button className="text-[#FF4D00] hover:underline text-sm mt-2">
                  See More
                </button>
              </div>

              {/* Other Filters */}
              <div>
                <h3 className="text-gray-800 font-semibold mb-2">
                  Filter Price
                </h3>
                <div className="h-[1px] bg-gray-200 w-full rounded"></div>
              </div>

              <div>
                <h3 className="text-gray-800 font-semibold mb-2">Rating</h3>
                <div className="h-[1px] bg-gray-200 w-full rounded"></div>
              </div>

              <div>
                <h3 className="text-gray-800 font-semibold mb-2">Specials</h3>
              </div>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-Inter">
            {hotelData.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
                    <span className="text-[#FF4C00] text-sm font-semibold">★</span>
                    <span className="text-sm font-medium">4.5 (23)</span>
                  </div>
                </div>
                <div className="p-4 relative">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-[#FF4D00] font-bold mb-2">
                    {hotel.price} <span className="text-gray-800 text-base font-light">Per Night</span> 
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Image src={locationIcon} alt="Location" width={16} height={16} className="mr-1" />
                    <p>{hotel.location}</p>
                  </div>
                  <button className="absolute -top-[14%] left-4 bg-[#CCF32F]
                   text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-lime-600">
                    <Link href="/hotel-page">
                    SEE AVAILABILITY
                    </Link>
                   
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center items-center space-x-2 mt-10">
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
            Previous
          </button>
          <button className="bg-[#FF4D00] text-white py-2 px-4 rounded-full shadow hover:bg-orange-600 transition duration-300">
            1
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
            2
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
            3
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 transition duration-300">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextStay;


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import "remixicon/fonts/remixicon.css";

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

// const NextStay = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [duration, setDuration] = useState(5);
//   const [budget, setBudget] = useState(50000);
//   const [flightOption, setFlightOption] = useState("With Flight");

//   const hotelData = [
//     { name: "Blu Plaza", location: "Mumbai, Maharashtra", price: "Rs. 5,000/-", image: BluPlaza },
//     { name: "Falaknuma Palace", location: "Hyderabad, Telangana", price: "Rs. 6,000/-", image: Falaknuma },
//     { name: "Himalayan Retreat", location: "Manali, Himachal Pradesh", price: "Rs. 7,000/-", image: Himalayas },
//     { name: "Luxury Hotel", location: "Delhi, India", price: "Rs. 4,500/-", image: Hotel },
//     { name: "Hyatt Regency", location: "Kolkata, West Bengal", price: "Rs. 8,000/-", image: Hyatt },
//     { name: "Leela Palace", location: "Bangalore, Karnataka", price: "Rs. 9,000/-", image: LeelaPalace },
//     { name: "The Oberoi", location: "Gurgaon, Haryana", price: "Rs. 10,000/-", image: Oberoi },
//     { name: "Royel Stay", location: "Jaipur, Rajasthan", price: "Rs. 6,500/-", image: Royel },
//     { name: "Taj Mahal View", location: "Agra, Uttar Pradesh", price: "Rs. 12,000/-", image: TajMahal },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14] py-10">
//       <div id="main" className="container mx-auto px-4 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <p className="text-sm uppercase tracking-wider text-gray-500 font-Inter">
//             WHERE DO YOU WANT TO GO
//           </p>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-Playfair-Display">
//             Find your next stay
//           </h1>
//         </div>

//         {/* Mobile Filter Button */}
//         <div className="lg:hidden mb-6 px-2">
//           <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide px-2">
//             <button 
//               onClick={() => setIsFilterOpen(true)} 
//               className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700"
//             >
//               <i className="ri-filter-3-line"></i> Filters
//             </button>
//           </div>
//         </div>

//         {/* Filter Popup Modal */}
//         {isFilterOpen && (
//           <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//             <div className="bg-white w-full max-w-lg h-full sm:h-auto sm:rounded-lg shadow-lg p-6">
//               {/* Modal Header */}
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-bold">Filters</h2>
//                 <button onClick={() => setIsFilterOpen(false)} className="text-gray-600 text-xl">
//                   <i className="ri-close-line"></i>
//                 </button>
//               </div>

//               {/* Clear All */}
//               <div className="text-right text-blue-600 font-semibold text-sm cursor-pointer">
//                 Clear All
//               </div>

//               {/* Duration Filter */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Duration in Nights</h3>
//                 <p className="text-gray-600 text-sm">{duration} N</p>
//                 <input 
//                   type="range" 
//                   min="1" 
//                   max="10" 
//                   value={duration} 
//                   onChange={(e) => setDuration(e.target.value)} 
//                   className="w-full accent-blue-600"
//                 />
//               </div>

//               {/* Flight Options */}
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold">Flights</h3>
//                 <div className="flex gap-4 mt-2">
//                   <button 
//                     className={`flex-1 p-3 rounded-lg border ${flightOption === "With Flight" ? "bg-blue-600 text-white" : "border-gray-300"}`}
//                     onClick={() => setFlightOption("With Flight")}
//                   >
//                     With Flight
//                   </button>
//                   <button 
//                     className={`flex-1 p-3 rounded-lg border ${flightOption === "Without Flight" ? "bg-blue-600 text-white" : "border-gray-300"}`}
//                     onClick={() => setFlightOption("Without Flight")}
//                   >
//                     Without Flight
//                   </button>
//                 </div>
//               </div>

//               {/* Budget Filter */}
//               <div className="mt-6">
//                 <h3 className="text-lg font-semibold">Budget (per person)</h3>
//                 <p className="text-gray-600 text-sm">₹{budget.toLocaleString()}</p>
//                 <input 
//                   type="range" 
//                   min="5000" 
//                   max="1611000" 
//                   value={budget} 
//                   onChange={(e) => setBudget(e.target.value)} 
//                   className="w-full accent-blue-600"
//                 />
//               </div>

//               {/* Apply Button */}
//               <div className="mt-6">
//                 <button 
//                   onClick={() => setIsFilterOpen(false)}
//                   className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg"
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Rest of your existing code remains unchanged */}
//       </div>
//     </section>
//   );
// };

// export default NextStay;
