import React from 'react'

const PropertyCard = () => {
  return (

    <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-200 flex items-center">
    <div className="flex-1">
      <h3 className="text-xl font-bold">Doris Beach House</h3>
      <p className="text-gray-500 text-sm">
        Also known as <strong>Calangute Beachside Budget Stay with Clean Rooms</strong>
      </p>
      <p className="text-gray-600 text-sm">Homestay in Goa</p>
    </div>
    <img src="https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Room" className="w-24 h-20 rounded-lg ml-4 object-cover" />
  </div>
 
  )
}

export default PropertyCard

  