import React from 'react'

const GuestInfo = () => (
  <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-200">
    <h3 className="text-lg font-semibold">Primary guest on your booking</h3>
    <p className="font-bold mt-2">Mrinmoy Ghosh</p>
    <div className="mt-3 border-t pt-3">
      <p className="text-gray-600 text-sm">All communication for your booking will be sent to :</p>
      <div className="flex items-center gap-2 mt-2">
        <i className="ri-mail-line text-gray-600"></i>
        <p className="text-blue-600 text-sm">mrinmoyghosh102@gmail.com</p>
      </div>
      <div className="flex items-center gap-2 mt-1">
        <i className="ri-phone-line text-gray-600"></i>
        <p className="text-gray-600 text-sm">918240491818</p>
      </div>
    </div>
  </div>
);

export default GuestInfo
