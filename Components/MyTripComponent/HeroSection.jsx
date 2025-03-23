
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const MyTrips = () => {
//   const [activeTab, setActiveTab] = useState("completed");

//   const trips = {
//     completed: [
//       {
//         id: 1,
//         destination: "Goa",
//         date: "15 Nov - 16 Nov",
//         property: "1 Property",
//         hotel: "Doris Beach House",
//         checkIn: "Fri, Nov 15 - 12:00 PM",
//         checkOut: "Sat, Nov 16 - 10:00 AM",
//         image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         guests: "Mrinmoy + 2",
//         bookingLink: "/booking-details"
//       },
//       {
//         id: 2,
//         destination: "Kolkata",
//         date: "15 Nov - 16 Nov",
//         property: "1 Property",
//         hotel: "Doris Beach House",
//         checkIn: "Fri, Nov 15 - 12:00 PM",
//         checkOut: "Sat, Nov 16 - 10:00 AM",
//         image: "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         guests: "Mrinmoy + 2",
//         bookingLink: "/booking-details"
//       },
//       {
//         id: 3,
//         destination: "Mumbai",
//         date: "15 Nov - 16 Nov",
//         property: "1 Property",
//         hotel: "Doris Beach House",
//         checkIn: "Fri, Nov 15 - 12:00 PM",
//         checkOut: "Sat, Nov 16 - 10:00 AM",
//         image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         guests: "Mrinmoy + 2",
//         bookingLink: "/booking-details"
//       },
//     ],
//     cancelled: [
//       {
//         id: 4,
//         destination: "Manali",
//         date: "10 Oct - 12 Oct",
//         property: "1 Hotel",
//         hotel: "Himalayan Retreat",
//         checkIn: "Tue, Oct 10 - 3:00 PM",
//         checkOut: "Thu, Oct 12 - 11:00 AM",
//         image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         guests: "Mrinmoy + 1",
//       },
//       {
//         id: 5,
//         destination: "Bangalore",
//         date: "05 Sep - 07 Sep",
//         property: "1 Property",
//         hotel: "ITC Gardenia",
//         checkIn: "Tue, Sep 05 - 1:00 PM",
//         checkOut: "Thu, Sep 07 - 10:00 AM",
//         image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         guests: "Mrinmoy + 3",
//       },
//     ],
//   };

//   return (
//     <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14]">
//  <div className="max-w-md container mx-auto p-6 relative mt-16 py-20 ">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">My Trips</h1>
//         <button className="text-blue-600 font-medium">+ Add Booking</button>
//       </div>

//       {/* Tabs */}
//       <div className="flex border-b">
//         <button
//           className={`flex-1 py-2 text-center ${
//             activeTab === "completed"
//               ? "text-blue-600 border-b-2 border-blue-600 font-medium"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("completed")}
//         >
//           Completed
//         </button>
//         <button
//           className={`flex-1 py-2 text-center ${
//             activeTab === "cancelled"
//               ? "text-blue-600 border-b-2 border-blue-600 font-medium"
//               : "text-gray-500"
//           }`}
//           onClick={() => setActiveTab("cancelled")}
//         >
//           Cancelled
//         </button>
//       </div>

//       {/* Trip Cards */}
//       <div className="mt-4 md:space-y-9 space-y-4">
//         {trips[activeTab].length > 0 ? (
//           trips[activeTab].map((trip) => (
//             <div key={trip.id} className="bg-white  rounded-lg shadow-md overflow-hidden">
//               <div
//                 className="h-40 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${trip.image})` }}
//               >
//                 <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
//                   <h2 className="text-lg font-semibold">{trip.destination}</h2>
//                   <p className="text-sm">{trip.date}</p>
//                   <p className="text-xs">{trip.property}</p>
//                 </div>
//               </div>
//               {trip.hotel && (
//                 <div className="p-4">
//                   <span
//                     className={`text-white text-xs px-2 py-1 rounded-full ${
//                       activeTab === "completed"
//                         ? "bg-green-500"
//                         : "bg-red-500"
//                     }`}
//                   >
//                     {activeTab === "completed" ? "Completed" : "Cancelled"}
//                   </span>
//                   <h3 className="font-semibold mt-2">{trip.hotel}</h3>
//                   <div className="text-sm text-gray-500 mt-1">
//                     <p>Check-in: {trip.checkIn}</p>
//                     <p>Check-out: {trip.checkOut}</p>
//                   </div>
//                   {activeTab === "completed" && (
//                     <div className="flex justify-between mt-3">
//                       <button className="border border-[#FF4C00] text-[#FF4C00] px-3 py-1 rounded-lg text-sm">
//                         Download Invoice
//                       </button>
//                       <Link href={trip.bookingLink} className="bg-[#FF4C00] text-white md:px-3 px-1  py-1 rounded-lg md:text-sm text-xs flex justify-center items-center">
//                         View Booking
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No trips found</p>
//         )}
//       </div>
//     </div>
//     </section>
   
//   );
// };

// export default MyTrips;



//================



"use client";

import React, { useState } from "react";
import Link from "next/link";

const MyTrips = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const trips = {
    completed: [
      {
        id: 1,
        destination: "Goa",
        date: "15 Nov - 16 Nov",
        property: "1 Property",
        hotel: "Doris Beach House",
        checkIn: "Fri, Nov 15 - 12:00 PM",
        checkOut: "Sat, Nov 16 - 10:00 AM",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        guests: "Mrinmoy + 2",
        bookingLink: "/booking-details",
        invoiceUrl: "/invoices/goa-trip-invoice.pdf"
      },
      {
        id: 2,
        destination: "Kolkata",
        date: "15 Nov - 16 Nov",
        property: "1 Property",
        hotel: "Doris Beach House",
        checkIn: "Fri, Nov 15 - 12:00 PM",
        checkOut: "Sat, Nov 16 - 10:00 AM",
        image: "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        guests: "Mrinmoy + 2",
        bookingLink: "/booking-details",
        invoiceUrl: "/invoices/kolkata-trip-invoice.pdf"
      },
      {
        id: 3,
        destination: "Mumbai",
        date: "15 Nov - 16 Nov",
        property: "1 Property",
        hotel: "Doris Beach House",
        checkIn: "Fri, Nov 15 - 12:00 PM",
        checkOut: "Sat, Nov 16 - 10:00 AM",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        guests: "Mrinmoy + 2",
        bookingLink: "/booking-details",
        invoiceUrl: "/invoices/mumbai-trip-invoice.pdf"
      },
    ],
    cancelled: [
      {
        id: 4,
        destination: "Manali",
        date: "10 Oct - 12 Oct",
        property: "1 Hotel",
        hotel: "Himalayan Retreat",
        checkIn: "Tue, Oct 10 - 3:00 PM",
        checkOut: "Thu, Oct 12 - 11:00 AM",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        guests: "Mrinmoy + 1",
      },
      {
        id: 5,
        destination: "Bangalore",
        date: "05 Sep - 07 Sep",
        property: "1 Property",
        hotel: "ITC Gardenia",
        checkIn: "Tue, Sep 05 - 1:00 PM",
        checkOut: "Thu, Sep 07 - 10:00 AM",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        guests: "Mrinmoy + 3",
      },
    ],
  };

  const handleDownloadInvoice = (invoiceUrl) => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = invoiceUrl;
    link.setAttribute('download', ''); // This will force download instead of navigation
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-gradient-to-b from-[#00c3ff0f] to-[#00C3FF14]">
      <div className="max-w-md container mx-auto p-6 relative mt-16 py-20 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">My Trips</h1>
          <button className="text-blue-600 font-medium">+ Add Booking</button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "completed"
                ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "cancelled"
                ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("cancelled")}
          >
            Cancelled
          </button>
        </div>

        {/* Trip Cards */}
        <div className="mt-4 md:space-y-9 space-y-4">
          {trips[activeTab].length > 0 ? (
            trips[activeTab].map((trip) => (
              <div key={trip.id} className="bg-white  rounded-lg shadow-md overflow-hidden">
                <div
                  className="h-40 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${trip.image})` }}
                >
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                    <h2 className="text-lg font-semibold">{trip.destination}</h2>
                    <p className="text-sm">{trip.date}</p>
                    <p className="text-xs">{trip.property}</p>
                  </div>
                </div>
                {trip.hotel && (
                  <div className="p-4">
                    <span
                      className={`text-white text-xs px-2 py-1 rounded-full ${
                        activeTab === "completed"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {activeTab === "completed" ? "Completed" : "Cancelled"}
                    </span>
                    <h3 className="font-semibold mt-2">{trip.hotel}</h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <p>Check-in: {trip.checkIn}</p>
                      <p>Check-out: {trip.checkOut}</p>
                    </div>
                    {activeTab === "completed" && (
                      <div className="flex justify-between mt-3">
                        <button 
                          onClick={() => handleDownloadInvoice(trip.invoiceUrl)}
                          className="border border-[#FF4C00] text-[#FF4C00] px-3 py-1 rounded-lg text-sm"
                        >
                          Download Invoice
                        </button>
                        <Link href={trip.bookingLink} className="bg-[#FF4C00] text-white md:px-3 px-1  py-1 rounded-lg md:text-sm text-xs flex justify-center items-center">
                          View Booking
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No trips found</p>
          )}
        </div>
      </div>
    </section>
   
  );
};

export default MyTrips;


