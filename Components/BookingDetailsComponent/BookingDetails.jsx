"use client"
import React from 'react'

const BookingDetails = () => {
  const copyBookingId = () => {
    const bookingId = "NH71026365930608";
    navigator.clipboard.writeText(bookingId);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-200">
    <h3 className="text-lg font-semibold">Booking Details</h3>
    <div className="flex justify-between border-b pb-2">
      <p><strong>Check-in:</strong> <span className="font-bold">Fri, 15 Nov 2024</span></p>
      <p className='text-right'><strong>Check-out:</strong> <span className="font-bold ">Sat, 16 Nov 2024</span></p>
    </div>
    <p className="mt-2">1 x Deluxe Room</p>
    <p><strong>3 Adults</strong></p>
    <p className="mt-2 text-gray-600">Primary Guest</p>
    <p className="font-semibold">Mrinmoy Ghosh</p>
    <hr className="my-3" />
    <p className="text-center text-gray-500 text-sm cursor-pointer hover:text-blue-500" onClick={copyBookingId}>
      Booking ID: NH71026365930608 (Click to copy)
    </p>
    <div className="mt-3 flex justify-between">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex-1 mr-2">
        Contact Property
      </button>
      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex-1">
        Property Details
      </button>
    </div>
  </div>
  )
}

export default BookingDetails
