
// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const EnquiryModal = ({ isOpen, onClose }) => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => setShowModal(true), 1000); // 1-second delay
//     } else {
//       setShowModal(false);
//     }
//   }, [isOpen]);

//   return (
//     <AnimatePresence>
//       {showModal && (
//         <motion.div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-[#ffffffec] p-8 rounded-lg shadow-lg w-[35vw] "
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//           >
//             {/* Modal Header */}
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">Help Desk</h2>
//               <button onClick={onClose} className="text-gray-500 text-xl">&times;</button>
//             </div>

//             {/* Modal Content */}
//             <p className="text-gray-600 mt-3">Hello! Welcome to HTH Tours</p>
//             <hr className="py-4"/>
//             <input type="text" placeholder="Full Name" className="border p-2 w-full mt-3 rounded" />
//             <input type="text" placeholder="Phone Number" className="border p-2 w-full mt-3 rounded" />
//             <input type="email" placeholder="Email ID" className="border p-2 w-full mt-3 rounded" />
//             <textarea placeholder="Drop us a small description" className="w-full p-2 py-4 border rounded-md mt-3 mb-6"></textarea>

//             {/* Submit Button */}
//             <button className="  px-4  mt-4 
//             w-full bg-[#FF4C00] hover:bg-orange-600 text-white py-4 rounded-md  transition">
//               Send Your Query
//             </button>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default EnquiryModal;


"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import nameIcon from "@/public/Images/EnquiryIcons/nameIcon.png"
import mailIcon from "@/public/Images/EnquiryIcons/mailIcon.png"
import messageIcon from "@/public/Images/EnquiryIcons/messageIcon.png"
import phone from "@/public/Images/EnquiryIcons/phone.png"

const EnquiryModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowModal(true), 1000); // 1-second delay
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-[75%] md:max-w-[50%] lg:max-w-[35%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold">Help Desk</h2>
              <button onClick={onClose} className="text-gray-500 text-xl sm:text-2xl">&times;</button>
            </div>

            {/* Modal Content */}
            <p className="text-gray-600 mt-3 text-sm sm:text-base mb-3">Hello! Welcome to HTH Tours</p>
            <hr className="py-3 sm:py-4" />

            <div className="relative flex items-center ">
              <Image src={nameIcon} alt="name" className="absolute left-3 top-5 w-5 h-5" />
              <input type="text" placeholder="Full Name" className="border p-2 pl-10 w-full mt-3 rounded text-sm sm:text-base" />
            </div>

            <div className="relative flex items-center">
              <Image src={phone} alt="phone" className="absolute left-3 top-5 w-5 h-5" />
              <input type="text" placeholder="Phone Number" className="border p-2 pl-10 w-full mt-3 rounded text-sm sm:text-base" />
            </div>

            <div className="relative flex items-center">
              <Image src={mailIcon} alt="email" className="absolute left-3 top-5 w-5 h-5" />
              <input type="email" placeholder="Email ID" className="border p-2 pl-10 w-full mt-3 rounded text-sm sm:text-base" />
            </div>

            <div className="relative">
              <Image src={messageIcon} alt="message" className="absolute left-3 top-8 w-5 h-5" />
              <textarea placeholder="Drop us a small description" className="w-full p-2 pl-10 py-3 sm:py-4 border rounded-md mt-3 mb-6 text-sm sm:text-base"></textarea>
            </div>

            {/* Submit Button */}
            <button className="px-4 w-full bg-[#FF4C00] hover:bg-orange-600 text-white py-3 sm:py-4 rounded-3xl transition text-sm sm:text-base">
              Send Your Query
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnquiryModal;
