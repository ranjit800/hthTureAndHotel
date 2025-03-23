// import React from "react";
// import Link from "next/link";

// const HotalDetails = () => {
//   return (
//     <div className="container mx-auto ">
//       {/* Cancellation Policy Card */}
//       <div className="bg-white md:shadow-md rounded-lg p-5 md:border md:border-gray-200">
//         {/* Title */}
//         <h2 className="text-lg font-semibold mb-3">Cancellation Policy</h2>

//         {/* Policy Points */}
//         <ul className="space-y-2 text-gray-700 text-sm">
//           <li className="flex items-center">
//             <i className="ri-check-line text-green-500 mr-2"></i>
//             Book with ₹0 Payment
//           </li>
//           <li className="flex items-center">
//             <i className="ri-check-line text-green-500 mr-2"></i>
//             Pay before Date, Time to avoid auto-cancellation
//           </li>
//           <li className="flex items-center">
//             <i className="ri-check-line text-green-500 mr-2"></i>
//             Payment can only be done on MakeMyTrip
//           </li>
//         </ul>

//         {/* Refund Section */}
//         <div className="flex justify-between items-center mt-4 text-sm font-semibold text-gray-600">
//           <span>Cancellation Policy</span>
//           <span className="text-blue-600 cursor-pointer">Applicable Refund</span>
//         </div>
//       </div>

//       {/* Bottom Section (Mobile Fixed, Desktop Normal) */}
//       <div className="bg-white shadow-md p-4 flex items-center justify-between border-t border-gray-200 
//                       lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
//                       fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20">
//         {/* Price Section */}
//         <div>
//           <p className="text-lg font-bold text-gray-900">₹1,383</p>
//           <p className="text-xs text-gray-500">+ ₹357 taxes & <br /> fees per night</p>
//         </div>

//         {/* Icons & Button */}
//         <div className="flex items-center gap-3">
//           {/* Heart Icon */}
//           <button className="p-2 rounded-full border border-gray-300">
//             <i className="ri-heart-line text-gray-600 text-lg"></i>
//           </button>

//           {/* Select Room Button */}
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold">
//             <Link href="/select-room">
//             SELECT ROOM
//             </Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HotalDetails;


import React from "react";
import Link from "next/link";

const HotalDetails = () => {
  return (
    <div className="container mx-auto md:p-0 p-3">
      {/* Travel Dates & Cancellation Policy (Combined Section) */}
      <div className="bg-white shadow-md rounded-lg p-3 border border-gray-200 mb-5">
        {/* Travel Dates & Guests */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="md:text-lg text-sm font-semibold">
            Travel Dates & Guests
          </h2>
          <p className="text-blue-600 text-sm cursor-pointer">View Calendar</p>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700  rounded-md ">
          <div>
            <p className="text-xs  text-gray-500">Check-in - Check-out</p>
            <p className="font-semibold md:text-sm text-xs border border-gray-300 p-3 mt-5 rounded-2xl text-blue-600">
              19 Feb - 20 Feb
            </p>
          </div>
          {/* <div className="border-l border-gray-300 h-6"></div> */}
          <div>
            <p className="text-xs text-gray-500 text-right">Guests & Rooms</p>
            <p className="font-semibold border md:text-sm text-xs border-gray-300 p-3 mt-5 rounded-2xl text-blue-600">
              2 Guests / 2 Rooms
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4 border-gray-300" />

        {/* Cancellation Policy */}
        <h2 className="text-lg font-semibold mb-3">Cancellation Policy</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            Book with ₹0 Payment
          </li>
          <li className="flex items-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            Pay before 17 Feb, 11:59 PM IST to avoid auto-cancellation
          </li>
          <li className="flex items-center">
            <i className="ri-check-line text-green-500 mr-2"></i>
            Payment can only be done on MakeMyTrip
          </li>
        </ul>
        <div className="flex justify-between items-center mt-4 text-sm font-semibold text-gray-600">
          <span>Cancellation Policy</span>
          <span className="text-blue-600 cursor-pointer">
            Applicable Refund
          </span>
        </div>
      </div>

      {/* About This Property */}
      {/* About This Property */}
      <div className="bg-white shadow-md rounded-lg p-3 border border-gray-200 mb-5">
        {/* About This Property */}
        <h2 className="text-lg font-semibold mb-3">About This Property</h2>
        <p className="text-sm text-gray-700">
          Enjoy a comfortable stay at this budget hotel in Bangalore which
          offers airport transfers, Wi-Fi & tidy rooms.
        </p>

        {/* Food and Dining & Location Links */}
        <div className="mt-3 space-y-2">
          <p className="text-sm font-semibold text-gray-900 flex justify-between items-center">
            Food and Dining
            <span className="text-blue-600 cursor-pointer">&gt;</span>
          </p>
          <p className="text-sm font-semibold text-gray-900 flex justify-between items-center">
            Location & Surroundings
            <span className="text-blue-600 cursor-pointer">&gt;</span>
          </p>
        </div>

        {/* View All Link */}
        <p className="mt-3 text-blue-600 cursor-pointer text-sm font-medium">
          View All
        </p>

        {/* Horizontal Line */}
        <hr className="my-4 border-gray-300" />

        {/* Amenities Section */}
        <h2 className="text-lg font-semibold mb-3">Amenities</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <i className="ri-check-line text-xl text-black"></i>
            <p className="text-xs text-gray-700 mt-1">Intercom</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="ri-battery-2-line text-xl text-gray-700"></i>
            <p className="text-xs text-gray-700 mt-1">Power Backup</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="ri-building-line text-xl text-gray-700"></i>
            <p className="text-xs text-gray-700 mt-1">Elevator/Lift</p>
          </div>
        </div>

        {/* View More Amenities */}
        <p className="mt-3 text-blue-600 cursor-pointer text-sm font-medium">
          +30 more Amenities
        </p>
      </div>

      {/* Property Rules & Information */}
      {/* Property Rules & Information */}
      <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-5">
        <h2 className="text-lg font-semibold mb-3">
          Property Rules & Information
        </h2>

        {/* Highlighted Box for Couple, Bachelor Rules */}
        <div className="border border-green-500 bg-green-50 p-3 rounded-lg mb-4">
          <p className="text-green-600 font-semibold text-sm">
            Couple, Bachelor Rules
          </p>
          <p className="text-xs text-gray-700">
            Unmarried couples/guests with Local IDs are allowed.
          </p>
        </div>

        {/* Rules List */}
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>• Primary guest should be at least 18 years of age.</li>
          <li>
            • Passport, Aadhar, Driving License, and Govt. ID accepted as ID
            proof(s).
          </li>
          <li>• Pets are not allowed.</li>
          <li>• Smoking within the premises is not allowed.</li>
        </ul>

        {/* Guest Profile Link */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm font-semibold text-gray-900">Guest Profile</p>
          <span className="text-blue-600 cursor-pointer">&gt;</span>
        </div>

        {/* View More Link */}
        <p className="mt-3 text-blue-600 cursor-pointer text-sm font-medium">
          View More
        </p>
      </div>

      {/* Location & Nearby */}
      {/* Location & Nearby */}
      <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-5">
      {/* Title and Street View Button */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Location & Nearby</h2>
        <button className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-lg">
          <i className="ri-road-map-line mr-1"></i> Street View
        </button>
      </div>

      {/* Address */}
      <p className="text-sm">
        <span className="font-semibold">Address:</span> 84, S C ROAD, GANDHI NAGAR, 
        Bengaluru, Karnataka, 560009
      </p>

      {/* Google Map - Interactive & Responsive */}
      <div className="relative mt-3 w-full h-64 md:h-80">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.947586718094!2d77.56727927578792!3d12.987164315712875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae166d50275555%3A0x38bbf8887d81200f!2sGandhi%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560009!5e0!3m2!1sen!2sin!4v1707505283072!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="absolute top-2 right-2 bg-white px-3 py-1 text-xs rounded-lg shadow-md text-gray-800">
          <i className="ri-map-pin-line mr-1"></i> View on Map
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex flex-col md:flex-row mt-4">
        {/* Sidebar for Desktop | Horizontal Scroll on Mobile */}
        <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-2 overflow-x-auto whitespace-nowrap md:whitespace-normal flex md:flex-col gap-2">
          <button className="bg-blue-100 text-blue-600 flex items-center px-3 py-2 text-xs rounded-lg">
            <i className="ri-map-pin-2-fill mr-2"></i> Key Landmarks
          </button>
          <button className="flex items-center text-gray-600 px-3 py-2 text-xs">
            <i className="ri-camera-line mr-2"></i> Attractions
          </button>
          <button className="flex items-center text-gray-600 px-3 py-2 text-xs">
            <i className="ri-train-line mr-2"></i> Transport
          </button>
          <button className="flex items-center text-gray-600 px-3 py-2 text-xs">
            <i className="ri-map-pin-line mr-2"></i> Other Landmarks
          </button>
        </div>

        {/* Nearby Places List */}
        <div className="w-full md:w-3/4 pl-4 mt-3 md:mt-0">
          {/* Place 1 */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-sm font-semibold">ISKCON Temple</p>
              <p className="text-xs text-gray-500">Religious Place</p>
            </div>
            <p className="text-sm text-gray-700">1.5 km</p>
          </div>

          {/* Place 2 */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-sm font-semibold">Assam State Museum</p>
              <p className="text-xs text-gray-500">Tourist Attraction</p>
            </div>
            <p className="text-sm text-gray-700">1.6 km</p>
          </div>

          {/* Place 3 (Popular) */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-sm font-semibold flex items-center">
                <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded mr-2">POPULAR</span>
                Guwahati Planetarium
              </p>
              <p className="text-xs text-gray-500">Tourist Attraction</p>
            </div>
            <p className="text-sm text-gray-700">2.5 km</p>
          </div>

          {/* Place 4 (Popular) */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-sm font-semibold flex items-center">
                <span className="bg-green-500 text-white px-2 py-0.5 text-xs rounded mr-2">POPULAR</span>
                Umananda Temple
              </p>
              <p className="text-xs text-gray-500">Religious Place</p>
            </div>
            <p className="text-sm text-gray-700">2.7 km</p>
          </div>

          {/* View All Link */}
          <p className="mt-3 text-blue-600 cursor-pointer text-sm font-medium">View All</p>
        </div>
      </div>
    </div>


      {/* Bottom Section */}
      <div
        className="bg-white shadow-md p-4 flex items-center justify-between border-t border-gray-200 
                      lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
                      fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20"
      >
        <div>
          <p className="text-lg font-bold text-gray-900">₹1,383</p>
          <p className="text-xs text-gray-500">
            + ₹357 taxes & <br /> fees per night
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full border border-gray-300">
            <i className="ri-heart-line text-gray-600 text-lg"></i>
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold">
            <Link href="/select-room">SELECT ROOM</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotalDetails;
