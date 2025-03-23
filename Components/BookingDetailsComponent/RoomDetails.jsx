import React from "react";
import "remixicon/fonts/remixicon.css";

const RoomDetails = () => (
  <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-200 flex items-start">
    <div className="flex-1">
      <h3 className="text-lg font-semibold">Room Details</h3>
      <p className="font-bold mt-1">Delux Room</p>
      <div className="text-gray-600 text-sm flex items-start gap-2 mt-1 flex-col">
      <div> <i className="ri-hotel-bed-line"></i> Room Only </div> 
       <div> <i className="ri-user-line"></i> 3 Adults</div>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        Daily Housekeeping, Toiletries, Caretaker, TV <span className="text-blue-600 font-medium">+ 8 more</span>
      </p>
      <p className="text-green-600 text-sm mt-2">
        <i className="ri-checkbox-circle-line text-green-500"></i> 10% discount on Water Sports activities such as Banana Boat Drive is available at GOA.
      </p>
      <p className="text-green-600 text-sm">
        <i className="ri-checkbox-circle-line text-green-500"></i> 10% discount on Airport Transfer is available, including Pick up only facility in Non A/C Car. Prior reservation is needed.
      </p>
    </div>
    <img src="https://plus.unsplash.com/premium_photo-1679121503833-5a38b9c0c1a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Deluxe Room" className="w-16 h-16 rounded-lg ml-4 object-cover" />
  </div>
);

export default RoomDetails;
