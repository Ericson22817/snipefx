import Image from 'next/image';
import React from 'react';

const BeginTrading = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 xl:px-48 mt-8">
      <div className="bg-gray-800 p-6 sm:p-8 md:p-12 rounded-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
            Begin trading in three steps
          </h1>
          <button className="bg-white text-black py-2 px-5 font-bold rounded hover:bg-gray-200 transition">
            Open Account →
          </button>
        </div>

        {/* Steps and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
          {/* Steps */}
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Register',
                desc: 'Choose an account type and submit your application',
              },
              {
                step: '2',
                title: 'Trade',
                desc: 'Access 180+ instruments across all asset classes on App.',
              },
              {
                step: '3',
                title: 'Trade',
                desc: 'Access 180+ instruments across all asset classes on App.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="bg-white text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg">
                  {step}
                </span>
                <div>
                  <h2 className="text-white font-bold text-lg sm:text-xl mb-1">{title}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full h-auto">
            <Image
              src="/images/in-equity-12-mockup.png"
              alt="Begin Trading"
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginTrading;
