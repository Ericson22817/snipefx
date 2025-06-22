'use client';
import { FaTools, FaBookOpen, FaBolt, FaPercent } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className=" text-white py-12 px-4 md:w-[70%] mx-auto mt-16 md:px-8">
      {/* Icons row */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 text-center">
        <div className="flex items-center gap-2">
          <div className="bg-white text-black rounded-full p-2">
            <FaTools size={18} />
          </div>
          <span className="font-semibold text-sm">Enhanced Tools</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white text-black rounded-full p-2">
            <FaBookOpen size={18} />
          </div>
          <span className="font-semibold text-sm">Trading Guides</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white text-black rounded-full p-2">
            <FaBolt size={18} />
          </div>
          <span className="font-semibold text-sm">Fast execution</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white text-black rounded-full p-2">
            <FaPercent size={18} />
          </div>
          <span className="font-semibold text-sm">Less Commission</span>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mt-10 mb-10">
        <h2 className="text-2xl md:text-3xl mt-10 font-bold">Why choose sinpefxpro.com</h2>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          We offer one-click trading experience with 3,000+ world-renowned markets.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-300">
        <div>
          <h3 className="text-white font-semibold border-l-4 border-yellow-400 pl-2 mb-2">
            Wide range of instruments
          </h3>
          <p>
            A partner invested in your success. Trade with confidence and benefit from the reliability
            of a trusted broker with a proven record of stability, security and strength.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold border-l-4 border-yellow-400 pl-2 mb-2">
            Unparalleled market conditions
          </h3>
          <p>
            Trade and invest confidently in top performing Cryptocurrencies with our timely Trading
            signals that ensure your profitability from day one.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold border-l-4 border-yellow-400 pl-2 mb-2">
            Globally licensed & regulated
          </h3>
          <p>
            Governments issue regulations related to environmental practices, employee practices,
            advertising practices, and much more. Furthermore, government regulations affect how
            companies structure their businesses, where companies decide to locate, how they classify
            their employees, and thousands of other things.
          </p>
        </div>
      </div>
    </section>
  );
}
