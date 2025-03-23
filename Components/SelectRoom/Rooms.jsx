// import React from 'react';
// import Link from "next/link";
// const roomsData = [
//   {
//     name: 'Luxurious Wooden Cottage with Valley View',
//     size: '312 sq. ft (29 sq. m)',
//     bedType: 'King Bed',
//     amenities: ['Iron/ironing Board', 'Bathroom', 'In-room Dining', 'Air Purifier', '24-hour Housekeeping', 'Air Conditioning'],
//     price: { original: '₹3,200', discounted: '₹2,685', taxes: '₹709 Taxes & Fees' },
//     offer: 'Login now and get this for ₹2,650 or less',
//     image: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     name: 'Luxurious Wooden Cottage with Garden View',
//     size: '288 sq. ft (27 sq. m)',
//     bedType: 'Double Bed',
//     amenities: ['Iron/ironing Board', 'Bathroom', 'In-room Dining', '24-hour Housekeeping', 'Air Conditioning'],
//     price: { original: '₹3,215', discounted: '₹2,237', taxes: '₹590 Taxes & Fees' },
//     offer: 'Login now and get this for ₹2,208 or less',
//     image: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     name: 'Executive Suite',
//     size: '350 sq. ft (32 sq. m)',
//     bedType: 'King Bed',
//     amenities: ['Private Balcony', 'Mini Bar', 'Smart TV', '24-hour Room Service', 'Air Conditioning', 'Free Wi-Fi'],
//     price: { original: '₹5,000', discounted: '₹4,200', taxes: '₹850 Taxes & Fees' },
//     offer: 'Login now and get this for ₹4,000 or less',
//     image: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     name: 'Presidential Suite',
//     size: '500 sq. ft (46 sq. m)',
//     bedType: 'King Bed',
//     amenities: ['Private Lounge', 'Jacuzzi', 'Personal Butler', 'Home Theatre System', 'Luxury Interiors'],
//     price: { original: '₹15,000', discounted: '₹12,999', taxes: '₹1,500 Taxes & Fees' },
//     offer: 'Login now and get this for ₹12,500 or less',
//     image: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ];

// const Rooms = () => {
//   return (
//     <div id="main" className="container mx-auto  relative my-16 py-20 ">
//       <div className="flex flex-col items-center text-center md:flex-row md:justify-between py-4 px-4 border-b border-gray-200">
//         <h2 className="text-lg md:text-xl font-bold">Select Room</h2>
//         <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-0">07 Feb - 08 Feb • 1 Room • 2 Guests</p>
//         <button className="text-blue-500 text-sm md:text-base font-semibold mt-1 md:mt-0">
//           <Link href="/hotel-list">
//           Modify
//           </Link>
//          </button>
//       </div>
//       <div className="space-y-6">
//         {roomsData.map((room, index) => (
//           <div key={index} className="border rounded-lg shadow-lg p-4 bg-white flex flex-col md:flex-row gap-4">
//             <img src={room.image} alt={room.name} className="w-full md:w-48 h-32 object-cover rounded-lg" />
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold">{room.name}</h3>
//               <p className="text-gray-500 text-sm">{room.size} | {room.bedType}</p>
//               <ul className="text-sm text-gray-600 mt-2">
//                 {room.amenities.map((amenity, i) => (
//                   <li key={i}>• {amenity}</li>
//                 ))}
//               </ul>
//               <p className="text-lg font-bold mt-2 text-green-600">{room.price.discounted} <span className="line-through text-gray-500 text-sm">{room.price.original}</span></p>
//               <p className="text-gray-500 text-sm">{room.price.taxes} per night</p>
//               <p className="text-blue-500 text-sm mt-1">{room.offer}</p>
//               <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md w-full md:w-auto hover:bg-blue-600">
//                 Select Room
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Bottom Section (Mobile Fixed, Desktop Normal) */}
//       <div className="bg-black text-white  shadow-md p-4 flex items-center justify-between border-t border-gray-200 
//                       lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
//                       fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20">
//         {/* Price Section */}
//         <div>
//           <p className="text-lg font-bold">₹71,560</p>
//           <p className="text-xs">+ ₹12,960 taxes & fees per night (2 Adults)</p>
//         </div>

//         {/* Select Button */}
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
//             <Link href="/review-boocking">
//             CONTINUE
//             </Link>
         
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Rooms; 


// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const roomsData = [
//   {
//     name: "Luxurious Wooden Cottage with Valley View",
//     size: "312 sq. ft (29 sq. m)",
//     bedType: "King Bed",
//     amenities: [
//       "Iron/ironing Board",
//       "Bathroom",
//       "In-room Dining",
//       "Air Purifier",
//       "24-hour Housekeeping",
//       "Air Conditioning",
//     ],
//     price: {
//       original: "₹3,200",
//       discounted: "₹2,685",
//       taxes: "₹709 Taxes & Fees",
//     },
//     offer: "Login now and get this for ₹2,650 or less",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Luxurious Wooden Cottage with Garden View",
//     size: "288 sq. ft (27 sq. m)",
//     bedType: "Double Bed",
//     amenities: [
//       "Iron/ironing Board",
//       "Bathroom",
//       "In-room Dining",
//       "24-hour Housekeeping",
//       "Air Conditioning",
//     ],
//     price: {
//       original: "₹3,215",
//       discounted: "₹2,237",
//       taxes: "₹590 Taxes & Fees",
//     },
//     offer: "Login now and get this for ₹2,208 or less",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Executive Suite",
//     size: "350 sq. ft (32 sq. m)",
//     bedType: "King Bed",
//     amenities: [
//       "Private Balcony",
//       "Mini Bar",
//       "Smart TV",
//       "24-hour Room Service",
//       "Air Conditioning",
//       "Free Wi-Fi",
//     ],
//     price: {
//       original: "₹5,000",
//       discounted: "₹4,200",
//       taxes: "₹850 Taxes & Fees",
//     },
//     offer: "Login now and get this for ₹4,000 or less",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Presidential Suite",
//     size: "500 sq. ft (46 sq. m)",
//     bedType: "King Bed",
//     amenities: [
//       "Private Lounge",
//       "Jacuzzi",
//       "Personal Butler",
//       "Home Theatre System",
//       "Luxury Interiors",
//     ],
//     price: {
//       original: "₹15,000",
//       discounted: "₹12,999",
//       taxes: "₹1,500 Taxes & Fees",
//     },
//     offer: "Login now and get this for ₹12,500 or less",
//     image:
//       "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const Rooms = () => {
//   const [showModify, setShowModify] = useState(false);
//   const [checkIn, setCheckIn] = useState("2025-02-09");
//   const [checkOut, setCheckOut] = useState("2025-02-10");
//   const [rooms, setRooms] = useState(1);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);
//   const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   return (
//     <div id="main" className="container mx-auto  relative my-7 py-20 ">
//       {/* Modify Search Dropdown */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 z-50 ${
//           showModify ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="p-4 border-b flex justify-between items-center">
//           <h2 className="text-lg font-semibold">Hotels & Homestays</h2>
//           <button
//             onClick={() => setShowModify(false)}
//             className="text-gray-500 text-xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Search Bar for Hotel Name */}
//         <div className="px-4 mt-4">
//           <div className="relative bg-gray-100 p-3 rounded-lg flex items-center">
//             <i className="ri-search-line text-gray-500 absolute left-3 text-lg"></i>
//             <input
//               type="text"
//               value="Hotel SUKHMANI"
//               readOnly
//               className="w-full bg-transparent pl-10 text-lg font-semibold text-gray-900"
//             />
//           </div>
//           <p className="text-sm text-gray-500 mt-1 ml-3">Guwahati</p>
//         </div>

//         {/* Date Selection */}
//         <div className="p-4 bg-gray-100 rounded-lg mx-4 mt-4">
//           <label className="text-sm font-semibold text-gray-700">
//             Check-in
//           </label>
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full bg-white p-2 rounded-md border mt-1"
//           />

//           <label className="text-sm font-semibold text-gray-700 mt-3 block">
//             Check-out
//           </label>
//           <input
//             type="date"
//             value={checkOut}
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full bg-white p-2 rounded-md border mt-1"
//           />
//         </div>

//         {/* Guests & Rooms */}
//         <div className="p-4 bg-gray-100 rounded-lg mx-4 mt-2 relative">
//           <p
//             className="text-sm font-semibold text-gray-700 cursor-pointer"
//             onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
//           >
//             {rooms} Room, {adults} Adults & {children} Children
//           </p>

//           {/* Dropdown for Room & Guest Selection */}
//           {showGuestsDropdown && (
//             <div className="absolute bg-white shadow-lg p-4 rounded-lg mt-2 w-full z-50">
//               {/* Rooms */}
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm font-semibold">Rooms</span>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setRooms(Math.max(1, rooms - 1))}
//                     className="px-2 py-1 border rounded-l"
//                   >
//                     -
//                   </button>
//                   <span className="px-3">{rooms}</span>
//                   <button
//                     onClick={() => setRooms(rooms + 1)}
//                     className="px-2 py-1 border rounded-r"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Adults */}
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm font-semibold">Adults</span>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setAdults(Math.max(1, adults - 1))}
//                     className="px-2 py-1 border rounded-l"
//                   >
//                     -
//                   </button>
//                   <span className="px-3">{adults}</span>
//                   <button
//                     onClick={() => setAdults(adults + 1)}
//                     className="px-2 py-1 border rounded-r"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Children */}
//               <div className="flex justify-between items-center">
//                 <span className="text-sm font-semibold">Children</span>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => setChildren(Math.max(0, children - 1))}
//                     className="px-2 py-1 border rounded-l"
//                   >
//                     -
//                   </button>
//                   <span className="px-3">{children}</span>
//                   <button
//                     onClick={() => setChildren(children + 1)}
//                     className="px-2 py-1 border rounded-r"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={() => setShowGuestsDropdown(false)}
//                 className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg"
//               >
//                 Done
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Modify Search Button */}
//         <div className="p-4">
//           <button
//             onClick={() => setShowModify(false)}
//             className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold"
//           >
//             MODIFY SEARCH
//           </button>
//         </div>
//       </div>

//       {/* Header */}
//       <div className="flex flex-col items-center text-center md:flex-row md:justify-between py-4 px-4 border-b border-gray-200">
//         <h2 className="text-lg md:text-xl font-bold">Select Room</h2>
//         <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-0">
//           {checkIn} - {checkOut} • {rooms} Room • {adults} Guests
//         </p>
//         <button
//           onClick={() => setShowModify(true)}
//           className="text-blue-500 text-sm md:text-base font-semibold mt-1 md:mt-0"
//         >
//           Modify
//         </button>
//       </div>
//       {/* rooms Card Section */}
//       <div className="space-y-6 md:p-0 p-3">
//         {roomsData.map((room, index) => (
//           <div
//             key={index}
//             className={`border rounded-lg shadow-lg p-4 bg-white flex flex-col md:flex-row gap-4 ${
//               selectedRoom === index ? "border-blue-500" : ""
//             }`}
//           >
//             <img
//               src={room.image}
//               alt={room.name}
//               className="w-full md:w-48 h-32 object-cover rounded-lg"
//             />
//             <div className="flex-1">
//               <h3 className="text-xl font-semibold">{room.name}</h3>
//               <p className="text-gray-500 text-sm">
//                 {room.size} | {room.bedType}
//               </p>
//               <ul className="text-sm text-gray-600 mt-2">
//                 {room.amenities.map((amenity, i) => (
//                   <li key={i}>• {amenity}</li>
//                 ))}
//               </ul>
//               <p className="text-lg font-bold mt-2 text-green-600">
//                 {room.price.discounted}{" "}
//                 <span className="line-through text-gray-500 text-sm">
//                   {room.price.original}
//                 </span>
//               </p>
//               <p className="text-gray-500 text-sm">
//                 {room.price.taxes} per night
//               </p>
//               {/* <p className="text-blue-500 text-sm mt-1">{room.offer}</p> */}
//               <div className="flex gap-3 mt-3">
               
//                 {/* Select Room Button */}
//                 <button
//                   onClick={() => setSelectedRoom(index)}
//                   className={`px-4 py-2 rounded-md w-full md:w-auto transition-colors duration-200 ${
//                     selectedRoom === index
//                       ? "bg-green-500 hover:bg-green-600 text-white"
//                       : "bg-blue-500 hover:bg-blue-600 text-white"
//                   }`}
//                 >
//                   {selectedRoom === index ? "Selected" : "Select Room"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Bottom Section (Mobile Fixed, Desktop Normal) */}
//       <div
//         className="bg-black text-white  shadow-md p-4 flex items-center justify-between border-t border-gray-200 
//                       lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
//                       fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20"
//       >
//         {/* Price Section */}
//         <div>
//           <p className="text-lg font-bold">₹71,560</p>
//           <p className="text-xs">+ ₹12,960 taxes & fees per night (2 Adults)</p>
//         </div>

//         {/* Select Button */}
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
//           <Link href="/review-boocking">CONTINUE</Link>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Rooms;



"use client";
import React, { useState } from "react";
import Link from "next/link";

export const roomsData = [
  {
    name: "Luxurious Wooden Cottage with Valley View",
    size: "312 sq. ft (29 sq. m)",
    bedType: "King Bed",
    amenities: [
      "Study Room",
      "Air Conditioning",
      "Wi-Fi",
      "Air Purifier",
      "Daily Housekeeping",
      "Bathroom",
      "In-room Dining",
      "Mineral Water",
      "Room Service",
    ],
    features: ["Closet", "Mirror", "Chair"],
    price: {
      original: "₹3,200",
      discounted: "₹2,685",
      taxes: "₹709 Taxes & Fees",
    },
    guestReviews: {
      totalReviews: 683,
      highlights: [
        { text: "Room Quality", checked: false },
        { text: "Bathroom Hygiene", checked: true },
        { text: "Service Cleanliness", checked: true },
        { text: "Couples", checked: false },
        { text: "Views", checked: true },
      ],
    },
    offer: "Login now and get this for ₹2,650 or less",
    image:
      "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luxurious Wooden Cottage with Garden View",
    size: "288 sq. ft (27 sq. m)",
    bedType: "Double Bed",
    amenities: [
      "Iron/ironing Board",
      "Bathroom",
      "In-room Dining",
      "24-hour Housekeeping",
      "Air Conditioning",
    ],
    features: ["Closet", "Mirror", "Chair"],
    price: {
      original: "₹3,215",
      discounted: "₹2,237",
      taxes: "₹590 Taxes & Fees",
    },
    guestReviews: {
      totalReviews: 683,
      highlights: [
        { text: "Room Quality", checked: true },
        { text: "Bathroom Hygiene", checked: true },
        { text: "Service Cleanliness", checked: true },
        { text: "Couples", checked: false },
        { text: "Views", checked: true },
      ],
    },
    offer: "Login now and get this for ₹2,208 or less",
    image:
      "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Executive Suite",
    size: "350 sq. ft (32 sq. m)",
    bedType: "King Bed",
    amenities: [
      "Private Balcony",
      "Mini Bar",
      "Smart TV",
      "24-hour Room Service",
      "Air Conditioning",
      "Free Wi-Fi",
    ],
    features: ["Closet", "Mirror", "Chair"],
    price: {
      original: "₹5,000",
      discounted: "₹4,200",
      taxes: "₹850 Taxes & Fees",
    },
    guestReviews: {
      totalReviews: 683,
      highlights: [
        { text: "Room Quality", checked: true },
        { text: "Bathroom Hygiene", checked: true },
        { text: "Service Cleanliness", checked: true },
        { text: "Couples", checked: false },
        { text: "Views", checked: true },
      ],
    },
    offer: "Login now and get this for ₹4,000 or less",
    image:
      "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Presidential Suite",
    size: "500 sq. ft (46 sq. m)",
    bedType: "King Bed",
    amenities: [
      "Private Lounge",
      "Jacuzzi",
      "Personal Butler",
      "Home Theatre System",
      "Luxury Interiors",
    ],
    features: ["Closet", "Mirror", "Chair"],
    price: {
      original: "₹15,000",
      discounted: "₹12,999",
      taxes: "₹1,500 Taxes & Fees",
    },
    guestReviews: {
      totalReviews: 683,
      highlights: [
        { text: "Room Quality", checked: true },
        { text: "Bathroom Hygiene", checked: true },
        { text: "Service Cleanliness", checked: true },
        { text: "Couples", checked: false },
        { text: "Views", checked: true },
      ],
    },
    offer: "Login now and get this for ₹12,500 or less",
    image:
      "https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
const [showModify, setShowModify] = useState(false);
const [checkIn, setCheckIn] = useState("2025-02-09");
const [checkOut, setCheckOut] = useState("2025-02-10");
const [rooms, setRooms] = useState(1);
const [adults, setAdults] = useState(2);
const [children, setChildren] = useState(0);
const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);


  return (
    <div id="main" className="container mx-auto  relative my-7 py-20 ">
      {/* Modify Search Dropdown */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transition-transform duration-300 z-50 ${
          showModify ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Hotels & Homestays</h2>
          <button
            onClick={() => setShowModify(false)}
            className="text-gray-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Search Bar for Hotel Name */}
        <div className="px-4 mt-4">
          <div className="relative bg-gray-100 p-3 rounded-lg flex items-center">
            <i className="ri-search-line text-gray-500 absolute left-3 text-lg"></i>
            <input
              type="text"
              value="Hotel SUKHMANI"
              readOnly
              className="w-full bg-transparent pl-10 text-lg font-semibold text-gray-900"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1 ml-3">Guwahati</p>
        </div>

        {/* Date Selection */}
        <div className="p-4 bg-gray-100 rounded-lg mx-4 mt-4">
          <label className="text-sm font-semibold text-gray-700">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-white p-2 rounded-md border mt-1"
          />

          <label className="text-sm font-semibold text-gray-700 mt-3 block">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-white p-2 rounded-md border mt-1"
          />
        </div>

        {/* Guests & Rooms */}
        <div className="p-4 bg-gray-100 rounded-lg mx-4 mt-2 relative">
          <p
            className="text-sm font-semibold text-gray-700 cursor-pointer"
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
          >
            {rooms} Room, {adults} Adults & {children} Children
          </p>

          {/* Dropdown for Room & Guest Selection */}
          {showGuestsDropdown && (
            <div className="absolute bg-white shadow-lg p-4 rounded-lg mt-2 w-full z-50">
              {/* Rooms */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">Rooms</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{rooms}</span>
                  <button
                    onClick={() => setRooms(rooms + 1)}
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Adults */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">Adults</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">Children</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => setShowGuestsDropdown(false)}
                className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Modify Search Button */}
        <div className="p-4">
          <button
            onClick={() => setShowModify(false)}
            className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold"
          >
            MODIFY SEARCH
          </button>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between py-4 px-4 border-b border-gray-200">
        <h2 className="text-lg md:text-xl font-bold">Select Room</h2>
        <p className="text-gray-600 text-sm md:text-base mt-1 md:mt-0">
          {checkIn} - {checkOut} • {rooms} Room • {adults} Guests
        </p>
        <button
          onClick={() => setShowModify(true)}
          className="text-blue-500 text-sm md:text-base font-semibold mt-1 md:mt-0"
        >
          Modify
        </button>
      </div>
      {/* Room Cards */}
      <div className="space-y-6 md:p-0 p-3">
        {roomsData.map((room, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-lg p-4 bg-white flex flex-col md:flex-row gap-4 ${
              selectedRoom === index ? "border-blue-500" : ""
            }`}
          >
            {/* Room Image */}
            <img
              src={room.image}
              alt={room.name}
              className="w-full md:w-48 h-32 object-cover rounded-lg"
            />

            {/* Room Info */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <p className="text-gray-500 text-sm">
                {room.size} | {room.bedType}
              </p>
              <ul className="text-sm text-gray-600 mt-2">
                {room.amenities.slice(0, 3).map((amenity, i) => (
                  <li key={i}>• {amenity}</li>
                ))}
              </ul>
              <p className="text-lg font-bold mt-2 text-green-600">
                {room.price.discounted}{" "}
                <span className="line-through text-gray-500 text-sm">
                  {room.price.original}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                {room.price.taxes} per night
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-3">
                {/* More Details Button */}
                <Link
                  href={`/room-details?room=${index}`}
                  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md w-full md:w-auto hover:bg-blue-50 text-center"
                >
                  More Details
                </Link>

                {/* Select Room Button */}
                <button
                  onClick={() => setSelectedRoom(index)}
                  className={`px-4 py-2 rounded-md w-full md:w-auto transition-colors duration-200 ${
                    selectedRoom === index
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  {selectedRoom === index ? "Selected" : "Select Room"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Section (Mobile Fixed, Desktop Normal) */}
      <div
        className="bg-black text-white  shadow-md p-4 flex items-center justify-between border-t border-gray-200 
                      lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
                      fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20"
      >
        {/* Price Section */}
        <div>
          <p className="text-lg font-bold">₹71,560</p>
          <p className="text-xs">+ ₹12,960 taxes & fees per night (2 Adults)</p>
        </div>

        {/* Select Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
          <Link href="/review-boocking">CONTINUE</Link>
        </button>
      </div>
    </div>
  );
};

export default Rooms;
