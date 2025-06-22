import { Mail } from "lucide-react";
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="w-1.5 h-4 bg-white mr-2 inline-block" />
              Company
            </h3>
            <ul className="space-y-1">
              <li>About</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="w-1.5 h-4 bg-white mr-2 inline-block" />
              Legal
            </h3>
            <ul className="space-y-1">
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="w-1.5 h-4 bg-white mr-2 inline-block" />
              Support
            </h3>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:support@citrustfxoptions.com" className="hover:underline">
                support@snipfxpro.com
              </a>
            </div>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="border border-gray-600 p-4 rounded max-w-4xl mx-auto">
          <div className="bg-indigo-800 text-xs text-white px-2 py-1 w-max uppercase font-bold mb-2">
            Risk Warning
          </div>
          <p className="text-gray-300 text-xs leading-relaxed">
            Trading derivatives and leveraged products carries a high level of risk, including the risk
            of losing substantially more than your initial investment. It is not suitable for everyone.
            Before you make any decision in relation to a financial product you should obtain and consider
            our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website
            and seek independent advice if necessary.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-xs">
            © snipefxpro.com 2016-2025. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-white text-lg">
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
