import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full md:h-[60vh] h-[50vh] flex items-center justify-center bg-cover bg-center mb-6" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521437620269-f477f5437820?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} 
    >
      {/* <div className="bg-black/50 absolute inset-0"></div> Overlay */}
      
      <div className="relative z-10 w-full max-w-2xl text-center px-6 mt-10">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6 font-Playfair-Display">
          Find Your Next Domestic <br /> Destination
        </h1>
        
        <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-lg">
          <input 
            type="text" 
            placeholder="Enter location..." 
            className="w-full px-4 py-3 text-gray-700 outline-none" 
          />
          <button className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
