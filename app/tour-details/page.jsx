// import Askedqns from '@/Components/HotelListComponents/Askedqns'
// import HeroSection from '@/Components/ToureDetailsComponents/HeroSection'
// import ToureOverview from '@/Components/ToureDetailsComponents/ToureOverview'
// import YouMayAlsoLike from '@/Components/ToureDetailsComponents/YouMayAlsoLike'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='pb-20'>
//       <HeroSection/>
//       <ToureOverview/>
//       <Askedqns/>
//       <YouMayAlsoLike/>
//     </div>
//   )
// }

// export default page


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RiUser3Line, RiPhoneLine, RiChat3Line } from "react-icons/ri";
import Askedqns from "@/Components/HotelListComponents/Askedqns";
import HeroSection from "@/Components/ToureDetailsComponents/HeroSection";
import ToureOverview from "@/Components/ToureDetailsComponents/ToureOverview";
import YouMayAlsoLike from "@/Components/ToureDetailsComponents/YouMayAlsoLike";

const Page = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="pb-20 relative">
      <HeroSection />
      <ToureOverview />
      <Askedqns />
      <YouMayAlsoLike />

      {/* Fixed Bottom Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-4 py-4 border-t z-20 lg:hidden">
        <span className="text-lg font-semibold">₹45,000 /person</span>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          onClick={() => setShowPopup(true)}
        >
          Get Quote
        </button>
      </div>

      {/* Popup Overlay & Form */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white shadow-lg rounded-xl w-80 lg:w-[400px] overflow-hidden"
          >
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
                Fill the form below to get the best price for your favorite
                destination.
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
                * Agree to Terms and Conditions
              </p>

              {/* Close Button */}
              <button
                className="w-full mt-3 text-red-600 font-semibold text-sm hover:underline"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Page;
