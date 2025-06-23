'use client';

import React from "react";

const categories = [
  { name: "Forex", icon: "€" },
  { name: "Crypto", icon: "₿" },
  { name: "Indexes", icon: "📈" },
  { name: "Stocks", icon: "🗂️" },
  { name: "Energy", icon: "💧" },
  { name: "Commodities", icon: "📦" },
];

const MarketSection = () => {
  return (
    <section className="bg-black text-white">
      {/* Top Blue Strip */}
      <div className="bg-gradient-to-r px-4 from-blue-800 to-blue-900 py-8 md:px-48 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-white md:text-4xl text-2xl font-semibold">
            Less
            <br />
            Commission
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-10">
          {categories.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <span className="mt-2 text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Market Analysis Section */}
      <div className="px-4 md:px-24 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold">
            Market analysis and
            <br />
            trade inspiration
          </h2>
          <p className="text-gray-300">
            With a thriving network of experts, being a client of TheAlertNation
            opens doors to many opportunities. Powerful market insight and the
            top trade setups in the industry. You will have extensive
            connections to professional traders.
          </p>
        </div>

        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/z7538iNe2Pw?rel=0&modestbranding=1&controls=0&showinfo=0"
            title="Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
