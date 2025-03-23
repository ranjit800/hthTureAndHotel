// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";
// import plusIcon from "../../public/Images/HotelListIg/Icon.png";
// import minusIcon from "../../public/Images/HotelListIg/Icon2.png";

// const Askedqns = () => {
//   const [openIndex, setOpenIndex] = useState(0); // Initialize with 0 to keep the first dropdown open

//   const toggleDropdown = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: "Can I get the refund?",
//       answer:
//         "Phang Nga Bay Sea Cave Canoeing & James Bond Island Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing and James Bond.",
//     },
//     {
//       question: "Can I change the travel date?",
//       answer: "Yes, you can change the travel date up to 48 hours before the trip, subject to availability.",
//     },
//     {
//       question: "When and where does the tour end?",
//       answer: "The tour ends at the same location where it begins unless otherwise specified in the itinerary.",
//     },
//     {
//       question: "Do you arrange airport transfers?",
//       answer: "Yes, we offer airport transfers at an additional cost. Please contact us for further details.",
//     },
//   ];

//   return (
//     <section>
//       <div id="main" className="relative w-full h-[25rem] md:h-[30rem] lg:h-[40rem] bg-white mb-10">
//         <div className="h-1/2 flex items-center justify-center text-center text-white">
          // <div id="banner" className="w-full mt-0 absolute md:-top-12 -top-3  ">
          //   <Image
          //     src={Banner}
          //     alt="Bottom Banner"
          //     className="block mx-auto"
          //     layout="responsive"
          //   />
          // </div>
//           <div className="container mx-auto relative -bottom-2/3 px-4 py-4 h-auto ">
//             <div className="text-center">
//               <p className="text-gray-600 font-Inter text-sm md:text-base">
//                 WHERE DO YOU WANT TO GO
//               </p>
//               <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-Playfair-Display">
//                 Frequently asked questions
//               </h2>
//             </div>
//             <div className="space-y-4 w-4/6 mx-auto text-left mt-10">
//               {faqData.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-lg shadow-sm overflow-hidden"
//                 >
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className="w-full flex justify-between items-center text-left px-6 py-4 bg-white hover:bg-gray-50"
//                   >
//                     <span className="text-base font-medium text-gray-900">
//                       {faq.question}
//                     </span>
//                     <Image
//                       src={openIndex === index ? minusIcon : plusIcon}
//                       alt="Toggle Icon"
//                       width={24}
//                       height={24}
//                       className={`transform transition-transform`}
//                     />
//                   </button>
//                   {openIndex === index && (
//                     <div className="px-6 py-4 text-gray-700 text-sm bg-white">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Askedqns;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Banner from "../../public/Images/homeImg/bottomImg.webp"
import plusIcon from "../../public/Images/HotelListIg/Icon.png";
import minusIcon from "../../public/Images/HotelListIg/Icon2.png";

const Askedqns = () => {
  const [openIndex, setOpenIndex] = useState(0); // Initialize with 0 to keep the first dropdown open

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I get the refund?",
      answer:
        "Phang Nga Bay Sea Cave Canoeing & James Bond Island Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing and James Bond.",
    },
    {
      question: "Can I change the travel date?",
      answer: "Yes, you can change the travel date up to 48 hours before the trip, subject to availability.",
    },
    {
      question: "When and where does the tour end?",
      answer: "The tour ends at the same location where it begins unless otherwise specified in the itinerary.",
    },
    {
      question: "Do you arrange airport transfers?",
      answer: "Yes, we offer airport transfers at an additional cost. Please contact us for further details.",
    },
  ];

  return (
    <section>
      <div className="relative w-full h-auto bg-white mb-10">
        {/* Banner Section */}
        <div id="banner" className="w-full mb-0 absolute md:-top-12 -top-3  ">
            <Image
              src={Banner}
              alt="Bottom Banner"
              className="block mx-auto"
              layout="responsive"
            />
          </div>
        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-10 md:pt-36">
          <div className="text-center">
            <p className="text-gray-600 font-Inter text-sm md:text-base">
              WHERE DO YOU WANT TO GO
            </p>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-Playfair-Display">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4 w-full md:w-3/4 lg:w-2/3 mx-auto text-left mt-10">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center text-left px-4 md:px-6 py-3 md:py-4 bg-white hover:bg-gray-50"
                >
                  <span className="text-sm md:text-base font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <Image
                    src={openIndex === index ? minusIcon : plusIcon}
                    alt="Toggle Icon"
                    width={30}
                    height={30}
                    className={`transform transition-transform`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Askedqns;
