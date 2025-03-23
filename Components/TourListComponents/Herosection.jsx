"use client"
import React, { useState } from "react";
import { RiStarFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";

const tours = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1668007598394-292ee944e83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Kathmandu, NEPAL",
    title: "Kathmandu Tour Package",
    duration: "4D 3N",
    rating: "4.8",
    price: "₹9,999/-",
    per: "Per Person",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1668007598394-292ee944e83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Paro - Punakha - Thimphu, BHUTAN",
    title: "Bhutan Tour Package",
    duration: "6D 5N",
    rating: "5.0",
    price: "₹33,999/-",
    per: "Per Person",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1668007598394-292ee944e83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Andaman Island, INDIA",
    title: "Andaman Island Tour Package",
    duration: "7D 6N",
    rating: "4.9",
    price: "₹1,05,000/-",
    per: "Per Couple",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1668007598394-292ee944e83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Cherrapunjee, NORTH EAST",
    title: "Krem Mawsynram Cave",
    duration: "1D 0N",
    rating: "4.8",
    price: "₹3,000/-",
    per: "Per Person",
  },
];

const destinations = [
  "Offbeat",
  "Wildlife Activities", 
  "Community Trips",
  "Private Trips",
  "Bike Ride",
  "Honeymoon",
  "Group Trips",
  "Trekking",
  "Local Sightseeing",
  "Fixed Departure",
];

const durations = [
  "6 Day", "7 Day", "3 Day", "5 Day", "8 Day", "11 Day",
  "4 Day", "9 Day", "10 Day", "1 Day", "12 Day"
];

const ratings = ["All", "5 Stars", "4 Stars", "3 Stars", "2 Stars", "1 Star"];

const TourListSection = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  return (
    <section className="">
      <div className="container mx-auto mb-10 flex gap-8 relative">
        {/* Sidebar Section - Desktop and Mobile */}
        <div className={`${showMobileFilter ? 'fixed inset-0 z-40 bg-white overflow-y-auto' : 'hidden'} md:relative md:w-1/4 md:block  `}>
          <div className="bg-white shadow-lg rounded-lg p-6 py-10 mt-16">
            {showMobileFilter && (
              <div className="flex justify-between items-center mb-4 md:hidden">
                <h2 className="text-xl font-bold">Filters</h2>
                <button 
                  onClick={() => setShowMobileFilter(false)}
                  className="text-gray-500"
                >
                  ✕
                </button>
              </div>
            )}
            
            {/* Tour Destination */}
            <h3 className="text-lg font-bold mb-4">Tour Destination</h3>
            <div className="space-y-2">
              {destinations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <label className="ml-2 text-gray-600">{item}</label>
                </div>
              ))}
            </div>

            {/* Duration */}
            <h3 className="text-lg font-bold mt-6 mb-4">Duration</h3>
            <div className="space-y-2">
              {durations.map((item, index) => (
                <div key={index} className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <label className="ml-2 text-gray-600">{item}</label>
                </div>
              ))}
            </div>

            {/* Ratings */}
            <h3 className="text-lg font-bold mt-6 mb-4">Ratings</h3>
            <div className="space-y-2">
              {ratings.map((item, index) => (
                <div key={index} className="flex items-center">
                  <input type="radio" name="rating" className="w-4 h-4 text-orange-500 border-gray-300 rounded" />
                  <label className="ml-2 text-gray-600">{item}</label>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                Clear All
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Tour Cards Section */}
        <div className="w-full md:w-3/4">
          <p className="text-sm font-bold mb-4 text-center text-gray-500 font-Playfair-Display">WHERE DO YOU WANT TO GO</p>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 font-Playfair-Display">Browse your destinations</h2>
          
          {/* Tours Found and Filter Button Container */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-500">76 - Tours Found</p>
            <button 
              className="md:hidden bg-orange-500 text-white p-2 rounded-lg flex items-center gap-2"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              <FiFilter size={20} />
              Filters
            </button>
          </div>

          {/* Tour Cards */}
          <div className="space-y-6">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Image Container with Duration and Rating */}
                <Link href={'/tour-details'} className="md:w-1/3 relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  {/* Duration Badge - Top Left */}
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="text-gray-800 font-medium">{tour.duration}</span>
                  </div>
                  {/* Rating Badge - Top Right */}
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center">
                    <RiStarFill className="text-yellow-500 mr-1" />
                    <span className="text-gray-800 font-medium">{tour.rating}</span>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-4 flex-1">
                  <p className="text-gray-500">{tour.location}</p>
                  <h3 className="text-xl font-bold mt-1">{tour.title}</h3>
                  <span className="mt-2 text-gray-400">⭐ Best Price Guarantee | Free Consultation</span>

                  {/* Price & Button */}
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold">{tour.price}</p>
                      <span className="text-sm text-gray-500">{tour.per}</span>
                    </div>
                    <Link href={'/tour-details'}>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center">
                      VIEW DETAILS <FiArrowRight className="ml-2" />
                    </button>
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button key={num} className={`w-10 h-10 rounded-full border ${num === 10 ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}>
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourListSection;
