'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full md:min-h-[80vh] bg-black text-white px-6 md:px-24 py-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left content */}
      <div className="flex-1 space-y-6 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Unlock <span className="text-blue-400">opportunity</span> through trading.
        </h1>
        <p className="text-base md:text-lg">
          Access global financial markets from one secure platform
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700 transition">
            Login Account
          </button>
          <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
            Register Account
          </button>
        </div>
        <p className="text-xs text-gray-300 mt-4">
          <span className="text-blue-400">*</span> Trading in Forex/ CFDs is highly speculative and carries a high level of risk.
        </p>
      </div>

      {/* Right image - hidden on small screens */}
      <div className="hidden md:block flex-1 relative w-full h-[300px] md:h-[500px] md:ml-8">
        <Image
          src="/images/slide2.png"
          alt="Trading opportunity"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
