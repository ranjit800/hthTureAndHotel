


// "use client";
// 
// import React, { useState } from "react";
// import Link from "next/link";
// import EnquiryModal from "./EnquiryModal"; 
//  import whatsappicon from "@/public/Images/whatsapp.png"
// import Image from "next/image";



// const FloatingButtons = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <>
//       {/* Floating Buttons */}
//       <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-3 z-50">
//         {/* Enquiry Button */}
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="bg-[#FF4C00] hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-lg  transition"
//         >
//           Enquiry
//         </button>

//         {/* Chat with Us Button */}
      //   <Link
      //   href="https://wa.me/917896801061"
      //   target="_blank"
      //   rel="noopener noreferrer"
      //   className="flex items-center bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition"
      // >
      //   <Image
      //     src={whatsappicon}
      //     alt="WhatsApp"
      //     className="w-8 h-8 mr-2"
      //   />
      //  <h3 className="font-Inter">Chat with Us</h3> 
      // </Link>
//       </div>

//       {/* Enquiry Modal */}
//       <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </>
//   );
// };

// export default FloatingButtons;


"use client";
import Image from "next/image";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import EnquiryModal from "./EnquiryModal";
import { usePathname } from "next/navigation";
import whatsappicon from "@/public/Images/whatsapp.png"

const FloatingButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Open modal automatically on page load and when changing pages
  useEffect(() => {
    setIsModalOpen(true);
  }, [pathname]);

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed md:bottom-4 bottom-20 md:right-4 right-4 flex flex-col items-end space-y-3 z-30">
        {/* Enquiry Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition"
        >
          Enquiry
        </button>

        {/* Chat with Us Button */}
        <Link
        href="https://wa.me/917896801061"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center md:bg-white  text-gray-900 md:px-4 md:py-2 md:rounded-full md:shadow-lg md:hover:bg-gray-100 transition"
      >
        <Image
          src={whatsappicon}
          alt="WhatsApp"
          className="md:w-8 w-10 md:h-8 h-10 mr-2"
        />
       <h3 className="font-Inter lg:block hidden">Chat with Us</h3> 
      </Link>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingButtons;
