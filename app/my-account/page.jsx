// "use client";
// import React from "react";
// import Link from "next/link";

// const MyAccount = () => {
//   return (
//     <section className="bg-gray-100 min-h-screen ">
//       <div className="container mx-auto max-w-lg p-4   relative my-7 py-20">
//         {/* Header */}
//         <div className="flex items-center justify-between py-4">
//           <h1 className="text-lg font-semibold">My Personal Account</h1>
//         </div>

//         {/* Profile Section */}
//         <div className="bg-white shadow-md rounded-lg p-5 mb-5">
//           <div className="flex items-center gap-4">
//             <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold">
//               RJ
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold">Ranjit Jana</h2>
//               <p className="text-gray-500 text-sm">📞 91080101496</p>
//               <p className="text-gray-500 text-sm">📧 rjanit099@gmail.com</p>
//             </div>
//           </div>
//           <Link href="/edit-profile" className="text-blue-600 text-sm mt-2 block">
//             ✏️ Edit Profile
//           </Link>
//           <div className="mt-4 bg-gray-100 p-3 rounded-lg">
//             <p className="text-sm text-gray-700">
//               Please complete your profile to get special offers on your birthday.
//             </p>
//             <Link href="/add-dob" className="text-blue-600 text-sm mt-1 block">
//               Add Date of Birth
//             </Link>
//           </div>
//         </div>

//         {/* Support Chat Section */}
//         <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-5 rounded-lg mb-5">
//           <h3 className="text-lg font-semibold">
//             Need help planning your next adventure?
//           </h3>
//           <p className="text-sm">
//             Myra will help you with any query related to your Travel.
//           </p>
//           <button className="mt-3 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold">
//             Chat with Myra
//           </button>
//         </div>

//         {/* My Toolkit Section */}
//         <div className="bg-white shadow-md rounded-lg p-5 mb-5">
//           <h2 className="text-lg font-semibold mb-3">MY TOOLKIT</h2>
//           <div className="space-y-3">
//             <Link href="/manage-trips" className="flex justify-between items-center text-gray-700">
//               <span>📅 View/Manage Trips</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/wishlist" className="flex justify-between items-center text-gray-700">
//               <span>❤️ Wishlist</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/co-travellers" className="flex justify-between items-center text-gray-700">
//               <span>👥 Co-Travellers</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/become-host" className="flex justify-between items-center text-gray-700">
//               <span>🏠 Become a Host</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//           </div>
//         </div>

//         {/* My Payment Central */}
//         <div className="bg-white shadow-md rounded-lg p-5 mb-5">
//           <h2 className="text-lg font-semibold mb-3">MY PAYMENT CENTRAL</h2>
//           <div className="space-y-3">
//             <Link href="/mmt-icici" className="flex justify-between items-center text-gray-700">
//               <span>💳 MMT ICICI Card <span className="text-red-500 text-xs">new</span></span>
//               <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/mycash" className="flex justify-between items-center text-gray-700">
//               <span>💰 MyCash</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/gift-cards" className="flex justify-between items-center text-gray-700">
//               <span>🎁 My Gift Cards</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/saved-cards" className="flex justify-between items-center text-gray-700">
//               <span>💾 Saved Cards</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//           </div>
//         </div>

//         {/* My Settings */}
//         <div className="bg-white shadow-md rounded-lg p-5 mb-5">
//           <h2 className="text-lg font-semibold mb-3">MY SETTINGS</h2>
//           <div className="space-y-3">
//             <Link href="/account-devices" className="flex justify-between items-center text-gray-700">
//               <span>⚙️ Account & Devices</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/communication-preferences" className="flex justify-between items-center text-gray-700">
//               <span>📧 Communication Preferences</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//             <Link href="/logout" className="flex justify-between items-center text-red-500">
//               <span>🚪 Logout</span> <i className="ri-arrow-right-s-line"></i>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyAccount;



"use client";
import React from "react";
import Link from "next/link";

const MyAccount = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-lg p-4 relative my-7 py-20">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <h1 className="text-lg font-semibold">My Personal Account</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold">
              RJ
            </div>
            <div>
              <h2 className="text-lg font-semibold">Ranjit Jana</h2>
              <p className="text-gray-500 text-sm">
                <i className="ri-phone-line"></i> 91080101496
              </p>
              <p className="text-gray-500 text-sm">
                <i className="ri-mail-line"></i> rjanit099@gmail.com
              </p>
            </div>
          </div>
          <Link href="/edit-profile" className="text-blue-600 text-sm mt-2 block">
            <i className="ri-edit-line"></i> Edit Profile
          </Link>
          <div className="mt-4 bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-700">
              Please complete your profile to get special offers on your birthday.
            </p>
            <Link href="/add-dob" className="text-blue-600 text-sm mt-1 block">
              <i className="ri-calendar-line"></i> Add Date of Birth
            </Link>
          </div>
        </div>

        {/* Support Chat Section */}
        {/* <div className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white p-5 rounded-lg mb-5">
          <h3 className="text-lg font-semibold">Need help planning your next adventure?</h3>
          <p className="text-sm">Myra will help you with any query related to your travel.</p>
          <button className="mt-3 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold">
            <i className="ri-chat-3-line"></i> Chat with Myra
          </button>
        </div> */}

        {/* My Toolkit Section */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold mb-3">MY TOOLKIT</h2>
          <div className="space-y-3">
            <Link href="/manage-trips" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-calendar-check-line"></i> View/Manage Trips</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/wishlist" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-heart-line"></i> Wishlist</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/co-travellers" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-group-line"></i> Co-Travellers</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/become-host" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-home-line"></i> Become a Host</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>

        {/* My Payment Central */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold mb-3">MY PAYMENT CENTRAL</h2>
          <div className="space-y-3">
            <Link href="/mmt-icici" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-bank-card-line"></i> MMT ICICI Card <span className="text-red-500 text-xs">new</span></span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/mycash" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-wallet-line"></i> MyCash</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/gift-cards" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-gift-line"></i> My Gift Cards</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/saved-cards" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-credit-card-2-line"></i> Saved Cards</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>

        {/* My Settings */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h2 className="text-lg font-semibold mb-3">MY SETTINGS</h2>
          <div className="space-y-3">
            <Link href="/account-devices" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-settings-3-line"></i> Account & Devices</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/communication-preferences" className="flex justify-between items-center text-gray-700">
              <span><i className="ri-mail-settings-line"></i> Communication Preferences</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
            <Link href="/logout" className="flex justify-between items-center text-red-500">
              <span><i className="ri-logout-box-line"></i> Logout</span>
              <i className="ri-arrow-right-s-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
