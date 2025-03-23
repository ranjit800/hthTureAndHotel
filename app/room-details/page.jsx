
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { roomsData } from "@/Components/SelectRoom/Rooms";
import Link from "next/link";

const RoomDetails = () => {
  const searchParams = useSearchParams();
  const roomIndex = searchParams.get("room");
  const [room, setRoom] = useState(null);

  useEffect(() => {
    if (roomIndex !== null) {
      const index = parseInt(roomIndex, 10);
      if (!isNaN(index) && index >= 0 && index < roomsData.length) {
        setRoom(roomsData[index]);
      } else {
        setRoom(null);
      }
    }
  }, [roomIndex]);

  if (!room) {
    return <p className="text-center mt-10">Invalid room selection or loading...</p>;
  }

  return (
    <section className="container mx-auto relative my-7 py-20">
      <div className="space-y-6 md:p-0 p-4">
        <h2 className="text-xl font-bold">{room.name}</h2>
        <img src={room.image} alt={room.name} className="w-full h-64 object-cover rounded-lg my-4" />
        <div className="md:p-6 p-4 border rounded-lg shadow-lg">
          <p className="text-sm">
            <strong>Size:</strong> {room.size}
          </p>
          <p className="text-sm">
            <strong>Bed Type:</strong> {room.bedType}
          </p>

          {/* Amenities */}
          <h3 className="text-lg font-semibold mt-4">Amenities</h3>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            {room.amenities.map((amenity, i) => (
              <li key={i}>• {amenity}</li>
            ))}
          </ul>

          {/* Room Features */}
          {room.features && room.features.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-4">Room Features</h3>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                {room.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* What Guests Say */}
        {room.guestReviews && (
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-5">
            <h2 className="text-lg font-semibold">What Guests Say</h2>
            <p className="text-gray-500 text-sm">
              Based on {room.guestReviews.totalReviews} reviews
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {room.guestReviews.highlights.map((review, index) => (
                <div
                  key={index}
                  className={`px-3 py-1 rounded-md border text-sm ${
                    review.checked
                      ? "bg-green-100 border-green-500 text-green-700 flex items-center"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {review.checked && <i className="ri-check-line text-green-500 mr-1"></i>}
                  {review.text}
                </div>
              ))}
            </div>
            <p className="mt-3 text-blue-600 cursor-pointer text-sm font-medium">
              More guest reviews
            </p>
          </div>
        )}

        {/* Pricing & Booking */}
        <div className="mt-6 bg-white shadow p-4 rounded-lg">
          <p className="text-lg font-bold text-green-600">
            {room.price.discounted}{" "}
            <span className="line-through text-gray-500 text-sm">{room.price.original}</span>
          </p>
          <p className="text-gray-500 text-sm">{room.price.taxes} per night</p>

          <button className="mt-3 bg-blue-500 text-white px-6 py-3 rounded-lg w-full">
            Continue Booking
          </button>
        </div>
      </div>

      {/* Bottom Pricing & Continue Button */}
      <div
        className="bg-black text-white shadow-md p-4 flex items-center justify-between border-t border-gray-200 
                      lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
                      fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20"
      >
        {/* Price Section */}
        <div>
          <p className="text-lg font-bold">₹71,560</p>
          <p className="text-xs">+ ₹12,960 taxes & fees per night (2 Adults)</p>
        </div>

        {/* Select Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
          <Link href="/review-boocking">CONTINUE</Link>
        </button>
      </div>
    </section>
  );
};

// ✅ Wrapping RoomDetails in Suspense at Page Level
const RoomDetailsPage = () => {
  return (
    <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
      <RoomDetails />
    </Suspense>
  );
};

export default RoomDetailsPage;
