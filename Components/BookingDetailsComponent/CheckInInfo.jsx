import React from "react";
import "remixicon/fonts/remixicon.css";

const CheckInInfo = () => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200">
      <div className="border-t-4 border-yellow-400 rounded-t-lg "></div>
    <div className=" p-4 my-4">
    <h3 className="text-lg font-semibold">Important Information for Check-in</h3>
    <ul className="text-gray-600 text-sm mt-3 space-y-2 list-none">
      <li>• Unmarried couples allowed</li>
      <li>• Local IDs not allowed</li>
      <li>• Passport, Aadhar, Driving License, and Govt. ID are accepted as ID proof(s)</li>
      <li>• Outside food is allowed</li>
      <li>• Food Delivery available from Zomato, Swiggy, Local restaurants, and Local delivery apps</li>
    </ul>
    <div className="mt-4 border-t"></div>
    <p className="text-blue-600 text-sm font-medium cursor-pointer py-3 border-b">View All Property Rules</p>
    <p className="text-blue-600 text-sm font-medium cursor-pointer py-3">View ID Proof(s) Required for Check-in</p>
    </div>
  
    
   
  </div>
);
export default CheckInInfo;
