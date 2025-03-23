
// import Image from "next/image";
// import React, { useRef, useEffect } from 'react'
// import BgTwo from "../../public/Images/homeImg/BgTwo.png";
// import Banner from "../../public/Images/homeImg/bottomImg.svg";

// import resort1 from "../../public/Images/homeImg/resort1.png";
// import resort2 from "../../public/Images/homeImg/resort2.png";

// const SecondSection = () => {
//   const mobileScrollRef = useRef(null);
//   const desktopScrollRef = useRef(null);

//   const setupInfiniteScroll = (ref) => {
//     if (ref.current) {
//       // Clone first and last items for infinite effect
//       const items = ref.current.children;
//       const firstItemClone = items[0].cloneNode(true);
//       const lastItemClone = items[items.length - 1].cloneNode(true);
      
//       ref.current.appendChild(firstItemClone);
//       ref.current.insertBefore(lastItemClone, items[0]);
      
//       // Set initial scroll position
//       ref.current.scrollLeft = ref.current.offsetWidth;
//     }
//   };

//   useEffect(() => {
//     setupInfiniteScroll(mobileScrollRef);
//     setupInfiniteScroll(desktopScrollRef);
//   }, []);

//   const handleScroll = (ref) => {
//     if (ref.current) {
//       const maxScroll = ref.current.scrollWidth - ref.current.offsetWidth;
      
//       if (ref.current.scrollLeft <= 0) {
//         ref.current.scrollLeft = maxScroll - ref.current.offsetWidth;
//       } else if (ref.current.scrollLeft >= maxScroll) {
//         ref.current.scrollLeft = ref.current.offsetWidth;
//       }
//     }
//   };

//   return (
//     <section>
//       <div id="main" className="relative w-full h-[25rem] md:h-[30rem] lg:h-[40rem] bg-white">
//         <div
//           className="h-1/2  flex items-center justify-center text-center text-white"
//           style={{
//             backgroundImage: `url(${BgTwo.src})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div id="banner" className="w-full mt-0 absolute md:-top-12 -top-3">
//             <Image
//               src={Banner}
//               alt="Bottom Banner"
//               className="block mx-auto"
//               layout="responsive"
//             />
//           </div>
//           {/* contain  */}
//           <div className="container mx-auto relative -bottom-2/3 px-4">
//             <div className="text-center">
//               <p className="text-gray-600 font-Inter text-xs md:text-sm">
//                 WHERE DO YOU WANT TO GO
//               </p>

//               <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 font-Playfair-Display">
//                 What are you looking for ?
//               </h2>
//             </div>
            
//             {/* Mobile/Tablet Scrollable View */}
//             <div 
//               ref={mobileScrollRef} 
//               className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-4 scrollbar-hide" 
//               style={{
//                 scrollbarWidth: 'none', 
//                 msOverflowStyle: 'none', 
//                 '::WebkitScrollbar': {display: 'none'}
//               }}
//               onScroll={() => handleScroll(mobileScrollRef)}
//             >
//               {[resort1, resort2, resort1, resort2, resort1, resort2].map((resort, index) => (
//                 <div key={index} className="resort relative flex-none w-[260px] md:w-[400px] h-[200px] md:h-[250px] snap-start">
//                   <Image
//                     src={resort}
//                     alt={`Resort ${index + 1}`}
//                     width={500}
//                     height={300}
//                     className="rounded-xl shadow-xl w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
//                     <p className="text-white font-semibold text-sm md:text-base">
//                       {index % 2 === 0 ? "Beautiful Resort View" : "Luxurious Resort Experience"}
//                     </p>
//                     <button 
//                       className="bg-orange-500 p-1.5 md:p-2 rounded-full hover:bg-orange-600"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4 md:h-5 md:w-5 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Scrollable View */}
//             <div 
//               ref={desktopScrollRef} 
//               className="hidden lg:flex overflow-x-auto snap-x snap-mandatory md:gap-24 gap-8 pb-4 scrollbar-hide"
//               style={{
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none',
//                 '::WebkitScrollbar': {display: 'none'}
//               }}
//               onScroll={() => handleScroll(desktopScrollRef)}
//             >
//               {[resort1, resort2, resort1, resort2].map((resort, index) => (
//                 <div key={index} className="resort relative flex-none w-[500px] h-[300px] snap-start">
//                   <Image
//                     src={resort}
//                     alt={`Resort ${index + 1}`}
//                     width={500}
//                     height={300}
//                     className="rounded-xl  w-full h-full object-cover"
//                   />
//                   <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
//                     <p className="text-white font-semibold text-lg">
//                       {index % 2 === 0 ? "Beautiful Resort View" : "Luxurious Resort Experience"}
//                     </p>
//                     <button 
//                       className="bg-orange-500 p-2 rounded-full hover:bg-orange-600"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-6 w-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SecondSection


//===============================


import Image from "next/image";
import React from 'react'
import Banner from "../../public/Images/homeImg/bottomImg.webp";

import resort1 from "../../public/Images/homeImg/Image1.png";
import resort2 from "../../public/Images/homeImg/image2.png";
import arrowButton from "../../public/Images/homeImg/Button.png";

const resortCards = [
  {
    image: resort1,
    title: "Looking for Travel"
  },
  {
    image: resort2, 
    title: "Looking for Hotel"
  }
];

const SecondSection = () => {
  return (
    <section>
      <div id="main" className="relative w-full h-[19rem] md:h-[30rem] lg:h-[50rem] bg-white">
        <div className="w-full md:h-1/2 h-[10vh]  md:bg-[#F1FFB6] bg-white ">
          <div id="banner" className="w-full mt-0 absolute md:-top-12 -top-3">
            <Image
              src={Banner}
              alt="Bottom Banner"
              className="block mx-auto "
              layout="responsive"
              // fill
              width={500} height={300}
              // fill
               
            />
          </div>
          {/* contain  */}
          <div className="container mx-auto relative md:-bottom-2/4 -bottom-[80%] ">
            <div className="text-center">
              <p className="text-gray-600 font-Inter text-xs md:text-sm md:mb-2 mb-0">
                WHERE DO YOU WANT TO GO
              </p>

              <h2 className="text-xl md:text-3xl font-bold text-gray-900 md:mb-7 mb-4 font-Playfair-Display">
                What are you looking for ?
              </h2>
            </div>
           
           <div id="contain" className="flex flex-row md:flex-row  md:gap-4 gap-0 ">
            {resortCards.map((card, index) => (
              <div key={index} id={`card-${index}`} className="w-full md:w-1/2 relative px-2 md:px-7 mb-4 md:mb-0">
                {/* <div className="absolute inset-0 bg-black bg-opacity-10 rounded-3xl"></div> */}
               
                <Image
                  src={card.image}
                  alt={`Resort ${index + 1}`}
                  className="rounded-xl w-full h-[120px] sm:h-[300px] md:h-[200px] lg:h-[400px] object-cover"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-3 md:bottom-5 left-4 md:left-9 right-4 md:right-9 flex justify-between items-center">
                  <p className="text-white font-semibold text-base sm:text-xl md:text-2xl font-Playfair-Display shadow-lg">{card.title}</p>
                  <button className="hover:opacity-80">
                    <Image 
                      src={arrowButton}
                      alt="Arrow Button"
                      width={30}
                      height={30}
                      className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
                      
                    />
                  </button>
                </div>
              </div>
            ))}
           </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection
