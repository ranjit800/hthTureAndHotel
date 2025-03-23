"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

import homeIcon from "@/public/Images/mobileFooter/home.png";
import hotelsIcon from "@/public/Images/mobileFooter/hotels.png";
import favouriteIcon from "@/public/Images/mobileFooter/favourite.png";
import travelsIcon from "@/public/Images/mobileFooter/travels.png";

const MobileFooter = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="fixed bottom-0 w-full bg-[#0A0E24] flex justify-around py-3 z-10 ">
      {/* Home Icon */}
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image src={homeIcon} alt="Home" className="cursor-pointer" />
        </Link>
      </div>

      {/* Hotels Icon */}
      <div className="flex flex-col items-center">
        <Link href="/hotel-list">
          <Image src={hotelsIcon} alt="Hotels" className="cursor-pointer" />
        </Link>
      </div>

      {/* Travels Icon with Tooltip */}
      <div className="relative flex flex-col items-center">
        <Image
          src={travelsIcon}
          alt="Travels"
          className="cursor-pointer"
          onClick={toggleTooltip}
        />

        {showTooltip && (
          <div ref={tooltipRef} className="absolute bottom-12 flex flex-col items-center">
            {/* Tooltip Box */}
            <div className="bg-[#1A77F2] text-white text-sm px-4 py-2 rounded-lg shadow-lg relative">
              <Link 
                href="/domestic-tour"
                className="block w-full text-center py-1 hover:bg-[#1662D1] rounded"
                onClick={() => setShowTooltip(false)}
              >
                Domestic
              </Link>
              <Link 
                href="/International-tour"
                className="block w-full text-center py-1 mt-1 hover:bg-[#1662D1] rounded"
                onClick={() => setShowTooltip(false)}
              >
                International
              </Link>

              {/* Tooltip Triangle */}
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 
                border-l-8 border-l-transparent 
                border-r-8 border-r-transparent 
                border-t-8 border-t-[#1A77F2]">
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Favourite Icon */}
      <div className="flex flex-col items-center">
        <Link href="/favourites">
          <Image src={favouriteIcon} alt="Favourite" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
