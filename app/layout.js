

import "./globals.css";
import Navbar from "../Components/LayoutComponents/Navbar";
import Footer from "../Components/LayoutComponents/Footer";
// import FloatingButtons from "@/Components/LayoutComponents/FloatingButtons";

export const metadata = {
  title: "Northeast Customized Tour Packages, Holiday Tour, Car Rentals & Hotel Booking - HTH Tours",
  description: "Book the best holiday tour packages and enjoy the best deals & offers at affordable prices at HTH tours. Our experience team support you available 24*7 | One of the best travel agent Guwahati North East India. Meghalaya, Tawang, Kaziranga you get special discount from us.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className="font-Inter antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}
            {/* <FloatingButtons/> */}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
