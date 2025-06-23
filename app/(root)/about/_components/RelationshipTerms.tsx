import React from 'react';

const cards = [
  {
    title: 'Investing',
    description: 'A wide selection of investment product to help build diversified portfolio',
    bgColor: 'bg-green-500',
    icon: '🌱',
  },
  {
    title: 'Trading',
    description: 'Powerful trading tools, resources, insight and support',
    bgColor: 'bg-blue-500',
    icon: '📊',
  },
  {
    title: 'Wealth management',
    description: 'Dedicated financial consultant to help reach your own specific goals',
    bgColor: 'bg-purple-500',
    icon: '📈',
  },
  {
    title: 'Investment advisory',
    description: 'A wide selection of investing strategies from seasoned portfolio managers',
    bgColor: 'bg-gray-700',
    icon: '🎧',
  },
  {
    title: 'Smart portfolio',
    description: 'A revolutionary, fully-automated investment advisory services',
    bgColor: 'bg-gray-400',
    icon: '🧠',
  },
  {
    title: 'Mutual fund advisor',
    description: 'Specialized guidance from independent local advisor for hight-net-worth investors',
    bgColor: 'bg-cyan-400',
    icon: '🤝',
  },
];

export default function FinanceOptions() {
  return (
    <div className="min-h-screen  max-w-6xl mx-auto text-white px-6 py-12">
      <h1 className="text-4xl font-bold">
        A <span className="text-red-500">relationship</span> on your terms.
      </h1>
      <p className="text-lg mt-2">Work with us the way you want.</p>
      <p className="text-sm text-gray-300 mt-4 max-w-3xl">
        Some believe you must choose between an online broker and a wealth management firm. At <span className="text-white font-semibold">citrustfxoptions.com</span>, you don’t need to compromise. Whether you invest on your own, with an advisor, or a little of both — we can support you.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div key={index} className={`${card.bgColor} p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300`}> 
            <div className="text-3xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p className="mt-2 text-sm text-white/90">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
