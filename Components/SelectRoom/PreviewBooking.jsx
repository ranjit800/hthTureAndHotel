// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// const PreviewBooking = () => {
//   const [guest, setGuest] = useState({
//     title: "Mr",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

  // const [paymentOption, setPaymentOption] = useState("full");
  // const [appliedCoupon, setAppliedCoupon] = useState("WELCOMETRIP");
  // const [discount, setDiscount] = useState(5043);

  // const availableCoupons = [
  //   { code: "MMTHSBC", discount: 5019, description: "HSBC Bank Credit Card Offer" },
  //   { code: "KOTAKEMI", discount: 4827, description: "Kotak Credit Card EMI Offer" },
  //   { code: "MMTAXISEMI", discount: 3759, description: "Axis Bank Credit Card NoCostEMI Offer" },
  // ];

  // const applyCoupon = (coupon) => {
  //   setAppliedCoupon(coupon.code);
  //   setDiscount(coupon.discount);
  // };

  // const removeCoupon = () => {
  //   setAppliedCoupon(null);
  //   setDiscount(0);
  // };

//   return (
//   <section className="bg-gray-100 pb-16 md:p-0 p-3">
// <div id="main" className="container mx-auto  relative mt-16 py-20 ">
//       {/* Header */}
//       <div className="bg-[#60259F] text-white py-3 px-4 flex flex-col sm:flex-row justify-between items-center rounded-lg">
//         <h2 className="text-lg font-semibold">Review your Booking</h2>
//         <span className="bg-black px-3 py-1 text-sm rounded mt-2 sm:mt-0">
//           Great Choice!
//         </span>
//       </div>

//       {/* Hotel Info */}
//       <div className="bg-white shadow-md p-6 mt-4 rounded-lg">
//         <h3 className="text-xl font-semibold">
//           Hotel Pulse Inn 300M from Jaipur Railway Station
//         </h3>
//         <p className="text-gray-500">
//           ⭐⭐⭐☆☆ <span className="bg-gray-200 px-2 py-1 text-sm rounded">Couple Friendly</span>
//         </p>
//         <p className="text-gray-600">
//           PLOT NO A-14, Sen Colony, Opp Railway Station Exit NO 1, Jaipur, India
//         </p>

//         {/* Check-in & Check-out */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-4 mt-4">
//           <div>
//             <p className="text-gray-700 font-semibold">CHECK IN</p>
//             <p className="text-lg font-bold">12 Mar 2025</p>
//             <p className="text-gray-600">12 PM</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">CHECK OUT</p>
//             <p className="text-lg font-bold">13 Mar 2025</p>
//             <p className="text-gray-600">11 AM</p>
//           </div>
//           <div>
//             <p className="text-gray-700 font-semibold">1 Night | 2 Adults | 1 Room</p>
//           </div>
//         </div>
//       </div>

//    {/* Guest Details */}
//    <div className="bg-white shadow-md p-6 mt-4 rounded-lg">
//   <h3 className="text-lg font-semibold">Guest Details</h3>

//   {/* Title, First Name, Last Name */}
//   <div className="flex flex-col sm:flex-row gap-4 mt-4">
//     <select
//       className="border p-3 rounded-lg w-full sm:w-32"
//       value={guest.title}
//       onChange={(e) => setGuest({ ...guest, title: e.target.value })}
//     >
//       <option>Mr</option>
//       <option>Ms</option>
//       <option>Mrs</option>
//     </select>
//     <input
//       type="text"
//       placeholder="First Name"
//       className="border p-3 rounded-lg w-full"
//       value={guest.firstName}
//       onChange={(e) => setGuest({ ...guest, firstName: e.target.value })}
//     />
//     <input
//       type="text"
//       placeholder="Last Name"
//       className="border p-3 rounded-lg w-full"
//       value={guest.lastName}
//       onChange={(e) => setGuest({ ...guest, lastName: e.target.value })}
//     />
//   </div>

//   {/* Email & Mobile Number */}
//   <div className="flex flex-col sm:flex-row gap-4 mt-4">
//     <div className="flex-1 min-w-0">
//       <p className="text-gray-600 text-sm">EMAIL ADDRESS</p>
//       <input
//         type="email"
//         placeholder="Email ID"
//         className="border p-3 w-full rounded-lg mt-1"
//         value={guest.email}
//         onChange={(e) => setGuest({ ...guest, email: e.target.value })}
//       />
//     </div>
//     <div className="flex-1 min-w-0">
//       <p className="text-gray-600 text-sm">MOBILE NUMBER</p>
//       <div className="flex flex-col sm:flex-row gap-2 mt-1">
//         <select
//           className="border p-3 rounded-lg sm:rounded-r-none w-full sm:w-24"
//           value={guest.countryCode}
//           onChange={(e) => setGuest({ ...guest, countryCode: e.target.value })}
//         >
//           <option>+91</option>
//           <option>+1</option>
//           <option>+44</option>
//         </select>
//         <input
//           type="tel"
//           placeholder="Contact Number"
//           className="border p-3 rounded-lg sm:rounded-l-none w-full"
//           value={guest.phone}
//           onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
//         />
//       </div>
//     </div>
//   </div>
// </div>

//  {/* Coupon Code Section */}
//  <div className="bg-white shadow-md p-6 mt-4 rounded-lg">
//         <h3 className="text-lg font-semibold">Coupon Codes</h3>

//         {/* Applied Coupon */}
//         {appliedCoupon && (
//           <div className="bg-blue-100 border border-blue-400 p-4 mt-3 rounded-lg flex justify-between items-center">
//             <div>
//               <p className="text-blue-600 font-bold">{appliedCoupon}</p>
//               <p className="text-gray-600 text-sm">Congratulations! Discount of INR {discount} Applied</p>
//             </div>
//             <button className="text-blue-600 font-semibold" onClick={removeCoupon}>
//               Remove
//             </button>
//           </div>
//         )}

//         {/* Available Coupons */}
//         {availableCoupons.map((coupon) => (
//           <div key={coupon.code} className="border p-4 mt-3 rounded-lg flex justify-between items-center">
//             <div>
//               <p className="text-gray-800 font-bold">{coupon.code}</p>
//               <p className="text-gray-600 text-sm">{coupon.description} - Get INR {coupon.discount} Off!</p>
//             </div>
//             <button className="text-blue-600 font-semibold" onClick={() => applyCoupon(coupon)}>
//               Apply
//             </button>
//           </div>
//         ))}

//         <p className="text-blue-600 font-semibold mt-4 cursor-pointer">View More Coupons</p>
//       </div>

//       {/* Payment Options */}
//       <div className="bg-white shadow-md p-6 mt-4 rounded-lg">
//         <h3 className="text-lg font-semibold">Payment Options</h3>
//         <div className="mt-3">
//           <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer bg-gray-100">
//             <input
//               type="radio"
//               name="payment"
//               checked={paymentOption === "full"}
//               onChange={() => setPaymentOption("full")}
//             />
//             <span>Pay Full Amount Now (₹1,418)</span>
//           </label>
//           <label className="flex items-center space-x-2 border p-3 rounded-lg cursor-pointer mt-2">
//             <input
//               type="radio"
//               name="payment"
//               checked={paymentOption === "partial"}
//               onChange={() => setPaymentOption("partial")}
//             />
//             <span>Book with ₹0 Payment (₹1,430 before 9 Mar)</span>
//           </label>
//         </div>
//       </div>

//       {/* Pay Now Button */}
//        {/* Select Button */}
//        <div className="bg-black text-white  shadow-md p-4 flex items-center justify-between border-t border-gray-200
//                       lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm
//                       fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20">
//         {/* Price Section */}
//         <div>
//           <p className="text-lg font-bold">₹71,560</p>
//           <p className="text-xs">+ ₹12,960 taxes & fees per night (2 Adults)</p>
//         </div>

//         {/* Select Button */}
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
//             <Link href="/">
//             CONTINUE
//             </Link>

//         </button>
//       </div>
//     </div>
//   </section>

//   );
// };

// export default PreviewBooking;

"use client";
import React, { useState } from "react";
import Link from "next/link";

const PreviewBooking = () => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(380);
  const [totalPrice, setTotalPrice] = useState(1160);
  const [paymentOption, setPaymentOption] = useState("full");
  const [appliedCoupon, setAppliedCoupon] = useState("WELCOMETRIP");
  // const [discount, setDiscount] = useState(5043);

  const availableCoupons = [
    { code: "MMTHSBC", discount: 5019, description: "HSBC Bank Credit Card Offer" },
    { code: "KOTAKEMI", discount: 4827, description: "Kotak Credit Card EMI Offer" },
    { code: "MMTAXISEMI", discount: 3759, description: "Axis Bank Credit Card NoCostEMI Offer" },
  ];

  const applyCoupon = (coupon) => {
    setAppliedCoupon(coupon.code);
    setDiscount(coupon.discount);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };


  return (
    <section className="bg-gray-50 min-h-screen pb-24   relative my-7 py-20">
      <div className="container mx-auto p-4 max-w-2xl">
        {/* Preview Booking Header */}
        <h1 className="text-2xl font-bold mb-6">Preview Booking</h1>

        {/* Hotel Details */}
        {/* Hotel Details */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="md:text-xl text-sm font-semibold">
                Hotel SUKHMANI
              </h2>
              <p className="text-gray-500 md:text-sm text-xs ">
                G S Road, Guwahati
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hotel Image"
              className="md:w-40 md:h-30  h-20 w-20 object-cover rounded-lg"
            />
          </div>

          {/* Check-in & Check-out Section */}
          <div className="border-t mt-3 pt-3 md:text-sm text-xs">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700 font-medium">CHECK IN</span>
                <p className="text-gray-900">
                  <span className="font-bold">09 Feb </span>2025,
                  <br /> Sun • 12 PM
                </p>
              </div>
              <div className="bg-gray-200 md:px-2 px-2 py-1 rounded-md text-xs font-semibold text-gray-700 text-center">
                1 Night
              </div>
              <div className="text-right">
                <span className="text-gray-700 font-medium">CHECK OUT</span>
                <p className="text-gray-900">
                  <span className="font-semibold">10 Feb</span> 2025, <br /> Mon
                  • 12 PM
                </p>
              </div>
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="border-t mt-3 pt-3 md:text-sm text-xs">
            <span className="text-gray-700 font-medium">Guests & Rooms</span>
            <p className="text-gray-800 font-bold">2 Adults • 1 Room</p>
          </div>
        </div>

        {/* Room Details Section */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold">
            DELUXE AC ROOM WITH CITY VIEW
          </h2>

          {/* Room Features */}
          <ul className="text-sm text-gray-500 mt-2 space-y-1">
            <li>• Room Only</li>
            <li>• No meals included</li>
          </ul>

          {/* Non-Refundable Notice */}
          <div className="border-t mt-3 pt-3">
            <p className="text-red-500 font-medium text-sm">Non-Refundable</p>
            <p className="text-gray-500 text-sm">
              Refund is not applicable for this booking
            </p>
          </div>

          {/* Cancellation Policy Link */}
          <p className="text-blue-500 text-sm mt-2 cursor-pointer">
            Inclusions & Cancellation Policy
          </p>

          {/* Add-ons Section */}
          <div className="border-t mt-3 pt-3">
            <h3 className="text-md font-semibold flex items-center">
              Addons{" "}
              <span className="ml-2 text-xs text-purple-700 border border-purple-700 px-2 py-0.5 rounded-lg">
                RECOMMENDED
              </span>
            </h3>
            <p className="text-gray-500 text-sm">Inclusive of Taxes</p>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-gray-700 text-sm">
                Add <span className="font-semibold">Breakfast</span> for ₹173
                for all guests
              </span>
            </label>
          </div>
        </div>

        {/* Property Rules */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold">Property Rules</h2>

          <ul className="text-sm text-gray-700 mt-3 space-y-2">
            <li className="flex items-center">
              <span className="text-gray-500">•</span>
              <span className="ml-2">Unmarried couples are not allowed</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">•</span>
              <span className="ml-2">
                Aadhar, Driving License, and Govt. ID are accepted as ID
                proof(s)
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">•</span>
              <span className="ml-2">Pets are not allowed</span>
            </li>
            <li className="flex items-center">
              <span className="text-gray-500">•</span>
              <span className="ml-2">Outside food is not allowed</span>
            </li>
          </ul>

          {/* View More Link */}
          <p className="text-blue-500 text-sm mt-3 cursor-pointer font-medium">
            View More
          </p>
        </div>

        
        {/* Price Break-Up */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold">Price Break-Up</h2>

          {/* Room Price */}
          <div className="flex justify-between items-center text-gray-700 text-sm mt-3">
            <span>
              1 Room, 1 Night
              <br />
              Best Price
            </span>
            <span className="font-medium">₹2,699</span>
          </div>

          {/* Horizontal Line */}
          <hr className="my-2 border-gray-300" />

          {/* Total Discount */}
          <div className="flex justify-between items-center text-green-600 text-sm">
            <span className="flex items-center">
              Total Discount
              <i className="ri-information-line ml-1 text-gray-500"></i>
            </span>
            <span className="font-medium">- ₹1,797</span>
          </div>

          {/* Horizontal Line */}
          <hr className="my-2 border-gray-300" />

          {/* Price After Discount */}
          <div className="flex justify-between items-center text-gray-700 text-sm">
            <span>Price after Discount</span>
            <span className="font-medium">₹902</span>
          </div>

          {/* Horizontal Line */}
          <hr className="my-2 border-gray-300" />

          {/* Taxes & Fees */}
          <div className="flex justify-between items-center text-gray-700 text-sm">
            <span className="flex items-center">
              Taxes & Service Fees
              <i className="ri-information-line ml-1 text-gray-500"></i>
            </span>
            <span className="font-medium">₹258</span>
          </div>

          {/* Horizontal Line */}
          <hr className="my-3 border-gray-300" />

          {/* Total Amount to be Paid */}
          <div className="flex justify-between items-center text-sm font-semibold">
            <span>Total Amount to be paid</span>
            <span>₹1,160</span>
          </div>
        </div>

      
         {/* Coupon Code Section */}
 <div className="bg-white shadow-md rounded-lg p-5 mb-5">
        <h3 className="text-lg font-semibold">Coupon Codes</h3>

        {/* Applied Coupon */}
        {appliedCoupon && (
          <div className="bg-blue-100 border border-blue-400 p-4 mt-3 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-blue-600 font-bold">{appliedCoupon}</p>
              <p className="text-gray-600 text-sm">Congratulations! Discount of INR {discount} Applied</p>
            </div>
            <button className="text-blue-600 font-semibold" onClick={removeCoupon}>
              Remove
            </button>
          </div>
        )}

        {/* Available Coupons */}
        {availableCoupons.map((coupon) => (
          <div key={coupon.code} className="border p-4 mt-3 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-bold">{coupon.code}</p>
              <p className="text-gray-600 text-sm">{coupon.description} - Get INR {coupon.discount} Off!</p>
            </div>
            <button className="text-blue-600 font-semibold" onClick={() => applyCoupon(coupon)}>
              Apply
            </button>
          </div>
        ))}

        <p className="text-blue-600 font-semibold mt-4 cursor-pointer">View More Coupons</p>
      </div>
        {/* Booking Information */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold mb-3">I am booking for</h2>

          {/* Radio Buttons for Selection */}
          <div className="flex items-center space-x-5">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="bookingFor"
                defaultChecked
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-gray-700 text-sm font-medium">Myself</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="bookingFor"
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-gray-700 text-sm font-medium">
                Someone Else
              </span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="flex gap-3 mt-4">
            <select className="border p-2 rounded-md text-gray-700 text-sm font-medium w-[24%]">
              <option>Mr</option>
              <option>Ms</option>
              <option>Mrs</option>
            </select>
            <input
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-md text-gray-900 text-sm font-medium bg-gray-100 w-[38%]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-md text-gray-900 text-sm font-medium bg-gray-100 w-[38%]"
            />
          </div>

          <div className="mt-3">
            <input
              type="email"
              placeholder="Emial"
              className="border p-2 w-full rounded-md text-gray-900 text-sm font-medium bg-gray-100"
            />
          </div>

          <div className="flex gap-3 mt-3">
            <select className="border p-2 rounded-md text-gray-700 text-sm font-medium w-[30%]">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="text"
              placeholder="MOBILE NUMBER"
              className="border p-2 rounded-md text-gray-700 text-sm font-medium w-[70%]"
            />
          </div>

          {/* GST Checkbox */}
          <div className="flex items-center mt-3">
            <input type="checkbox" className="w-4 h-4 accent-blue-600 mr-2" />
            <span className="text-gray-700 text-sm font-medium">
              I have a GST Number (Optional)
            </span>
          </div>

          {/* Add Another Guest Link */}
          <p className="text-blue-500 text-sm font-medium mt-3 cursor-pointer">
            + Add Another Guest
          </p>
        </div>

        {/* Accept Policy */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-700 text-sm">
              By proceeding, I agree to HTH Trip's{" "}
              <span className="text-blue-500 cursor-pointer">
                User Agreement, Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-blue-500 cursor-pointer">
                Cancellation & Hotel Booking Policies
              </span>
            </p>
          </label>
        </div>
        {/* Bottom Section (Mobile Fixed, Desktop Normal) */}
        <div
          className="bg-black text-white  shadow-md p-4 flex items-center justify-between border-t border-gray-200 
                      lg:relative lg:mt-6 lg:rounded-lg lg:border lg:shadow-sm 
                      fixed bottom-0 left-0 w-full max-w-screen-sm mx-auto lg:max-w-full z-20"
        >
          {/* Price Section */}
          <div>
            <p className="text-lg font-bold">₹71,560</p>
            <p className="text-xs">
              + ₹12,960 taxes & fees per night (2 Adults)
            </p>
          </div>

          {/* Select Button */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-sm font-semibold">
            <Link href="/thanks">CONTINUE</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreviewBooking;
