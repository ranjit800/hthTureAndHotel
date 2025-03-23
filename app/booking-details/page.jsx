import BookingDetails from "@/Components/BookingDetailsComponent/BookingDetails";
import CheckInInfo from "@/Components/BookingDetailsComponent/CheckInInfo";
import GuestInfo from "@/Components/BookingDetailsComponent/GuestInfo";
import Header from "@/Components/BookingDetailsComponent/Header";
import PaymentSummary from "@/Components/BookingDetailsComponent/PaymentSummary";
import PropertyCard from "@/Components/BookingDetailsComponent/PropertyCard";
import RoomDetails from "@/Components/BookingDetailsComponent/RoomDetails";
import Link from "next/link";
const BookingPage = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen py-20 mt-10">
      <Header/>
     <PropertyCard/>
        <BookingDetails/>
      <RoomDetails/>
      <CheckInInfo/>
      <PaymentSummary/>
      <GuestInfo/> 
      {/* <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-between z-40">
        <p className="text-lg font-bold">₹1,273</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg ">
          <Link href="/review-booking">CONTINUE</Link>
        </button>
      </div> */}
    </div>
  );
};

export default BookingPage;