
import React from 'react'

const PaymentSummary = () => (
  <div className="bg-white rounded-lg shadow-md p-4 my-4 border border-gray-200">
    <h3 className="text-lg font-semibold">Payment</h3>
    <div className="flex justify-between border-b pb-3">
      <p className="text-gray-600">TOTAL PRICE</p>
      <p className="font-bold">₹1,273</p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-600">AMOUNT PAID</p>
      <p>₹1,273</p>
    </div>
    <p className="text-sm text-gray-500 mt-2 italic">- ybl (****@ybl)</p>
    <div className="mt-4 border-t"></div>
    <p className="text-blue-600 text-sm font-medium cursor-pointer py-3 border-b">View Price and Payment Breakup</p>
    <p className="text-blue-600 text-sm font-medium cursor-pointer py-3">Get GST/Tax Invoice</p>
  </div>
);

export default PaymentSummary
