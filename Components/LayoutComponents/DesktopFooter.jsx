
import Image from "next/image";
import logo from "../../public/Images/footerImg/logofooter.png";
import americanExpress from "../../public/Images/footerImg/american-express.png";
import applePay from "../../public/Images/footerImg/apple-pay.png";
import bitpay from "../../public/Images/footerImg/bitpay.png";
import discover from "../../public/Images/footerImg/discover.png";
import gpay from "../../public/Images/footerImg/gpay.png";
import maestro from "../../public/Images/footerImg/maestro.png";
import mastercard from "../../public/Images/footerImg/mastercard.png";
import paypal from "../../public/Images/footerImg/paypal.png";
import sofort from "../../public/Images/footerImg/sofort.png";
import visa from "../../public/Images/footerImg/visa.png";
import facebook from "../../public/Images/footerImg/facebook.png";
import insta from "../../public/Images/footerImg/insta.png";
import pinterest from "../../public/Images/footerImg/p.png";
import twitter from "../../public/Images/footerImg/twiter.png";

const DesktopFooter = () => {
  return (
    <footer className="bg-[#141B34] text-white pt-10">
      {/* Footer Content */}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row flex-wrap gap-8 font-Inter">
        {/* Explore Section */}
        <div className="mb-8 sm:mb-0 flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-3">Explore The Unexplored</h3>
          <p className="text-sm leading-relaxed mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form by injected
            humour or randomised.
          </p>
          <Image src={logo} alt="HTH Tours Logo" width={120} height={40} className="w-auto h-auto" />
        </div>

        {/* Company Links and Quick Links Container */}
        <div className="flex flex-row gap-8 flex-1 min-w-[250px]">
          {/* Company Links */}
          <div className="mb-8 sm:mb-0 flex-1">
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Press Room
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 sm:mb-0 flex-1">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline text-sm">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-sm">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment and Social Media */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-3">Payment methods possible</h3>
          <div className="flex flex-wrap gap-2 mb-4 min-w-[250px]">
            <div className="flex flex-col gap-2">
              <Image src={mastercard} alt="Mastercard" width={60} height={30} className="w-auto h-auto" />
              <Image src={gpay} alt="Google Pay" width={60} height={30} className="w-auto h-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={bitpay} alt="BitPay" width={60} height={30} className="w-auto h-auto" />
              <Image src={applePay} alt="Apple Pay" width={60} height={30} className="w-auto h-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={visa} alt="Visa" width={60} height={30} className="w-auto h-auto" />
              <Image src={paypal} alt="PayPal" width={60} height={30} className="w-auto h-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={americanExpress} alt="American Express" width={60} height={30} className="w-auto h-auto" />
              <Image src={maestro} alt="Maestro" width={60} height={30} className="w-auto h-auto" />
            </div>
            <div className="flex flex-col gap-2">
              <Image src={discover} alt="Discover" width={60} height={30} className="w-auto h-auto" />
              <Image src={sofort} alt="Sofort" width={60} height={30} className="w-auto h-auto" />
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <p>
            <a href="#" className="hover:underline text-sm">
              Become a Tour guide for Us
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#00000033] py-4 mt-10 font-Inter">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Text on the Left */}
          <p className="text-sm text-center sm:text-left">&copy; 2023 HTH Tours. All Rights Reserved</p>

          {/* Social Media Icons on the Right */}
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-75">
              <Image src={facebook} alt="Facebook" width={24} height={24} className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Image src={twitter} alt="Twitter" width={24} height={24} className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Image src={insta} alt="Instagram" width={24} height={24} className="w-8 h-8" />
            </a>
            <a href="#" className="hover:opacity-75">
              <Image src={pinterest} alt="Pinterest" width={24} height={24} className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
