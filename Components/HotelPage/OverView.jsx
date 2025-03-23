// "use client";
// import React from "react";
// import Image from "next/image";
// import nameIcon from "@/public/Images/HotelPageImg/nameIcon.png";
// import numberIcon from "@/public/Images/HotelPageImg/numberIcon.png";
// import checkinoutIcon from "@/public/Images/HotelPageImg/checkinoutIcon.png";



// const OverView = () => {
//   return (
//     <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
//       {/* Left Content */}
//       <section className="lg:w-3/4">
//         <h2 className="text-2xl font-bold text-gray-900">Hotel overview</h2>
//         <p className="text-gray-700 mt-4">
//           There are many variations of passages of Lorem Ipsum available but the
//           majority have suffered alteration in some form by injected humour
//           orbit randomised words which don't look even slightly believable. If
//           you are going to use a passage of Lorem Ipsum, you need to be sure
//           there isn't.
//         </p>
//         <p className="text-gray-700 mt-2">
//           There are many variations of passages of Lorem Ipsum available but the
//           majority have suffered alteration in some form by injected humour
//           orbit randomised words which don't look even slightly believable. If
//           you are going to use a passage.
//         </p>

//         <h3 className="text-xl font-bold text-gray-900 mt-8">
//           What's included
//         </h3>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           {[
//             "Beverages, Drinking Water, Morning Tea Lunch",
//             "Local Taxes",
//             "Hotel Pickup and Drop Off",
//             "Insurance Transfer To a Private Pier",
//             "Extensive Tour Guide",
//             "Cosmetics For Grooming",
//             "Night Outing Costs",
//             "Alcoholic Beverages",
//           ].map((item, index) => (
//             <div key={index} className="flex items-center space-x-2">
//               <span className="w-4 h-4 bg-[#FF4C00] rounded"></span>
//               <p className="text-gray-700">{item}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Sidebar - Right */}
//       <aside className="lg:w-1/4 pb-6 bg-white rounded-2xl flex flex-col justify-between min-h-[600px] shadow-lg border border-gray-200">
//         <div className="">
//           <div className="bg-[#0E3D4D] rounded-t-2xl  p-6">
            // <h4 className="text-lg font-bold   text-white  rounded-t-2xl">
            //   Rs. 45,000/-{" "}
            //   <span className="text-gray-300 line-through text-sm">Rs. 1,200/-</span>{" "}
            //   Per Night
            // </h4>
//           </div>

//           <p className="text-gray-900   px-6 border-b-2 py-2 bg-gray-50">
//             Get Latest Quote Now
//             <br />{" "}
//             <span className=" text-gray-400 text-sm ">
//               Fill the form below to get best price in your favorite destination
//             </span>
//           </p>
//         </div>

//         <form className="mt-4 space-y-4 px-6 ">
//           <input
//             type="text"
//             placeholder="John Doe"
//             className="w-full p-3 border rounded-lg bg-gray-50"
//           />
//           <input
//             type="text"
//             placeholder="+91 00000 - 00000"
//             className="w-full p-3 border rounded-lg bg-gray-50"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded-lg bg-gray-50"
//           />
//           <input
//             type="date"
//             placeholder="Check In Date"
//             className="w-full p-3 border rounded-lg bg-gray-50"
//           />
//           <input
//             type="date"
//             placeholder="Check Out Date"
//             className="w-full p-3 border rounded-lg bg-gray-50"
//           />
//           <button className="w-full bg-[#CCF32F] text-gray-900 p-3 rounded-lg font-bold hover:bg-[#d3f83ebb] transition">
//             BOOK NOW
//           </button>
//         </form>
//         <p className="text-xs text-gray-500 mt-2 text-center">
//           * Agree Terms and Conditions
//         </p>
//       </aside>
//     </main>
//   );
// };

// export default OverView;



"use client";
import React from "react";
import Image from "next/image";
import nameIcon from "@/public/Images/HotelPageImg/nameIcon.png";
import numberIcon from "@/public/Images/HotelPageImg/numberIcon.png";
import checkinoutIcon from "@/public/Images/HotelPageImg/checkinoutIcon.png";
import emailIcon from "@/public/Images/HotelPageImg/mail-send-fill.png";



const OverView = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      {/* Left Content */}
      <section className="lg:w-3/4">
        <h2 className="text-2xl font-bold text-gray-900 font-Playfair-Display">Hotel overview</h2>
        <p className="text-gray-700 mt-4 font-Inter">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form by injected humour
          orbit randomised words which don't look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't.
        </p>
        <p className="text-gray-700 mt-2 font-Inter">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form by injected humour
          orbit randomised words which don't look even slightly believable. If
          you are going to use a passage.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 font-Playfair-Display">What's included</h3>
        <div className="flex flex-wrap gap-4 mt-4">
          {[
            "Beverages, Drinking Water, Morning Tea Lunch",
            "Local Taxes", 
            "Hotel Pickup and Drop Off",
            "Insurance Transfer To a Private Pier",
            "Extensive Tour Guide",
            "Cosmetics For Grooming",
            "Night Outing Costs",
            "Alcoholic Beverages",
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2 w-full lg:w-[calc(50%-8px)]">
              <span className="w-4 h-4 bg-[#FF4C00] rounded"></span>
              <p className="text-gray-700 font-Inter">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sidebar - Right */}
      <aside className="lg:w-1/4 pb-4 bg-white rounded-2xl flex flex-col justify-between min-h-[600px] shadow-lg border border-gray-200 font-Inter">
        <div className="">
          <div className="bg-[#0E3D4D] rounded-t-2xl p-4">
          <h4 className="text-lg font-bold   text-white  rounded-t-2xl">
              Rs. 45,000/-{" "}
              <span className="text-gray-300 line-through text-sm">Rs. 1,200/-</span> <br />
              Per Night
            </h4>
          </div>

          <p className="text-gray-900 px-4 border-b-2 py-2 bg-gray-50">
            Get Latest Quote Now
            <br />
            <span className="text-gray-400 text-sm">
              Fill the form below to get best price in your favorite destination
            </span>
          </p>
        </div>

        <form className="mt-4 space-y-4 px-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name *</label>
            <div className="relative">
              <Image
                src={nameIcon}
                alt="Name Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="number" className="block text-gray-700 font-medium mb-1">Number *</label>
            <div className="relative">
              <Image
                src={numberIcon}
                alt="Number Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                id="number"
                type="text"
                placeholder="+91 00000 - 00000"
                className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email *</label>
            <div className="relative">
              <Image
                src={emailIcon}
                alt="Email Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500"
              />
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="checkin" className="block text-gray-700 font-medium mb-1">Check In Date *</label> */}
            <div className="relative">
              <Image
                src={checkinoutIcon}
                alt="Check In Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => document.getElementById("checkin").showPicker()}
              />
              <input
                id="checkin"
                type="text"
                placeholder="Check In Date"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.showPicker();
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = "text";
                  }
                }}
                className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="checkin" className="block text-gray-700 font-medium mb-1">Check In Date *</label> */}
            <div className="relative">
              <Image
                src={checkinoutIcon}
                alt="Check In Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => document.getElementById("checkin").showPicker()}
              />
              <input
                id="checkin"
                type="text"
                placeholder="Check Out Date"
                onFocus={(e) => {
                  e.target.type = "date";
                  e.target.showPicker();
                }}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.type = "text";
                  }
                }}
                className="w-full p-3 pl-10 border rounded-lg bg-gray-50"
              />
            </div>
          </div>

          <button className="w-full bg-[#CCF32F] text-gray-900 p-3 rounded-lg font-bold hover:bg-[#d3f83ebb] transition">
            BOOK NOW
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2 text-center">
          * Agree Terms and Conditions
        </p>
      </aside>
    </main>
  );
};

export default OverView;
