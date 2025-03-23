"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import logo from "@/public/Images/logo.png";
import logoForMenu from "@/public/Images/logo-mobile-nav.png";
import searchIcon from "@/public/Images/search.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-transparent backdrop-blur-sm fixed w-full z-50 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div>
              <Link href="/">
                <Image src={logo} alt="HTH Tours Logo" width={120} height={40} />
              </Link>
            </div>

            {/* Search and Menu Buttons (Side by Side on the Right) */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button onClick={() => setIsSearchOpen(true)} className="lg:hidden focus:outline-none">
                <Image src={searchIcon} alt="Search" width={24} height={24} />
              </button>

              {/* Menu Button */}
              <button onClick={() => setIsOpen(true)} className="lg:hidden focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center space-x-6">
              <ul className="flex space-x-6 text-gray-950 font-semibold font-Inter">
                <li>
                  <a href="#" className="hover:underline">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    BLOG
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    CONTACT
                  </a>
                </li>
              </ul>
              <Link href="/tour-list" className="bg-[#FF4C00] text-white px-4 py-2 rounded-2xl hover:bg-orange-600">
                TAKE A TRIP
              </Link>
              <Link href="/hotel-list" className="bg-[#FF4C00] text-white px-4 py-2 rounded-2xl hover:bg-orange-600">
                Hotels
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white rounded-tr-2xl shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Top Section */}
        <div className="bg-[#11162B] p-6 flex justify-between items-center rounded-tr-2xl">
          <Image src={logoForMenu} alt="HTH Tours Mobile Logo" width={120} height={40} />
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            &times;
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="px-3 py-4">
          <ul className="space-y-4 text-gray-900 font-semibold ">
            <li>
              <Link href="/my-account" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                My Account
              </Link>
            </li>

            <li>
              <Link href="/my-trip" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                My Bookings
              </Link>
            </li>

            <li>
              <Link href="#" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Destinations
              </Link>
            </li>

            <li>
              <Link href="#" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 border-b" onClick={() => setIsOpen(false)}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2" onClick={() => setIsOpen(false)}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/hotel-list" className="block py-2" onClick={() => setIsOpen(false)}>
                Hotels-list
              </Link>
            </li>
            <li>
              <Link href="/hotel-page" className="block py-2" onClick={() => setIsOpen(false)}>
                Hotel-page
              </Link>
            </li>
            <li>
              <Link href="/tour-list" className="block py-2" onClick={() => setIsOpen(false)}>
               Tour
              </Link>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-start  space-x-4 mt-10">
            <a href="#" className="bg-lime-300 p-3 rounded-full text-black" onClick={() => setIsOpen(false)}>
              <FaFacebookF />
            </a>
            <a href="#" className="bg-lime-300 p-3 rounded-full text-black" onClick={() => setIsOpen(false)}>
              <FaTwitter />
            </a>
            <a href="#" className="bg-lime-300 p-3 rounded-full text-black" onClick={() => setIsOpen(false)}>
              <FaInstagram />
            </a>
            <a href="#" className="bg-lime-300 p-3 rounded-full text-black" onClick={() => setIsOpen(false)}>
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay (Click outside to close sidebar) */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Search Bar (Slides Down from Top) */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md transform ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center w-full">
            <input type="text" placeholder="Search..." className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <Image src={searchIcon} alt="Search" width={24} height={24} className="ml-2" />
          </div>
          <button onClick={() => setIsSearchOpen(false)} className="ml-3 text-2xl text-gray-600">
            &times;
          </button>
        </div>
      </div>

      {/* Overlay (Click outside to close search bar) */}
      {isSearchOpen && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsSearchOpen(false)}></div>}
    </>
  );
};

export default Navbar;
