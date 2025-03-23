"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ThanksPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 500); // Delay animation for effect
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Success Animation */}
      <div
        className={`transition-all duration-700 ease-in-out transform ${
          showMessage ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          {/* Success Icon */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-500 text-4xl mb-4">
            <i className="ri-check-line"></i>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-bold text-gray-900">Thank You!</h2>
          <p className="text-gray-600 mt-2 text-center">
            Your booking has been successfully completed.  
            We hope you have a great stay!
          </p>

          {/* Booking Details */}
          <div className="bg-gray-50 p-4 mt-4 w-full rounded-lg text-sm border border-gray-200 text-gray-700">
            <p><strong>Hotel Name:</strong> Hotel SUKHMANI</p>
            <p><strong>Check-in:</strong> 09 Feb 2025, 12 PM</p>
            <p><strong>Check-out:</strong> 10 Feb 2025, 12 PM</p>
            <p><strong>Guests:</strong> 2 Adults • 1 Room</p>
          </div>

          {/* Continue Button */}
          <Link href="/" className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
              Continue Exploring
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
