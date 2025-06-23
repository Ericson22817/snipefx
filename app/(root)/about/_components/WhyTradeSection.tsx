import React from 'react';

const benefits = [
  'Direct Market Access (DMA)',
  'Leverage up to 1:500',
  'T+0 settlement',
  'Dividends paid in cash',
  'Free from UK Stamp Duty',
  'Short selling available',
  'Commissions from 0.08%',
  'Access to 1500 global shares'
];

const shares = [
  { name: 'Apple Inc CFD', deposit: '10%' },
  { name: 'Alibaba CFD', deposit: '10%' },
  { name: 'Facebook CFD', deposit: '10%' }
];

export default function WhyTradeSection() {
  return (
    <div className=" max-w-6xl mx-auto text-white px-6 py-12 space-y-16">
      {/* WHY TRADE SECTION */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-indigo-500 p-3 rounded-full text-white text-xl">💵</div>
            <h2 className="text-2xl font-bold">Why trade with <span className="text-white">citrustfxoptions.com</span>?</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            The best rated ASIC broker in the industry Dedicated account manager & personalised service Regulated by the Australian Securities and Investment Commission We are suggesting this broker so you can try their services on a demo account. Speak to your financial advisor before opening a live account.
          </p>
          <div className="grid sm:grid-cols-2 gap-y-2 text-sm text-white/90">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-400">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h3 className="font-semibold text-lg mb-3">Check out our Shares offer</h3>
          <div className="bg-white text-black rounded-md overflow-hidden">
            <div className="grid grid-cols-2 text-xs font-bold bg-gray-100 p-2 border-b">
              <div>NAME</div>
              <div className="text-right">INITIAL DEPOSIT</div>
            </div>
            {shares.map((share, index) => (
              <div key={index} className={`grid grid-cols-2 p-2 text-sm ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
                <div>{share.name}</div>
                <div className="text-right">{share.deposit}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-blue-400 mt-2 cursor-pointer hover:underline">See Full Shares Table</div>
        </div>
      </div>

      {/* CTA BANNER */}
      <div className="bg-white rounded-md text-black p-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left font-semibold text-lg">
          Get up to <span className="font-bold">£600</span> plus 60 days of commission-free stocks & forex trades
        </p>
        <button className="mt-4 sm:mt-0 bg-indigo-800 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">Open an Account</button>
      </div>

      {/* LEGAL DOCS */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-12">citrustfxoptions.com Legal Docs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0e0e0e] rounded-lg p-6">
            <div className="text-blue-500 text-3xl mb-4">📄</div>
            <h3 className="text-lg font-bold mb-2">Terms of Service</h3>
            <p className="text-sm text-gray-300 mb-4">Read the Terms of Service and License Agreement for Blockit as well as our BlockitApp & Developer Agreements.</p>
            <ul className="text-blue-400 text-sm space-y-1">
              <li>📘 License Agreement</li>
              <li>📘 Term of Services for Blockit Trade</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0e0e0e] rounded-lg p-6">
            <div className="text-blue-500 text-3xl mb-4">🌐</div>
            <h3 className="text-lg font-bold mb-2">Policies</h3>
            <p className="text-sm text-gray-300 mb-4">Find out more about what information we collect at Blockit, how we use it, and what control you have over your data.</p>
            <ul className="text-blue-400 text-sm space-y-1">
              <li>📘 Privacy Statement</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0e0e0e] rounded-lg p-6">
            <div className="text-blue-500 text-3xl mb-4">🛡️</div>
            <h3 className="text-lg font-bold mb-2">Security</h3>
            <p className="text-sm text-gray-300 mb-4">Learn more about how we keep your work and personal data safe when you&apos;re using our services.</p>
            <ul className="text-blue-400 text-sm space-y-1">
              <li>📘 Blockit Trade Security</li>
              <li>📘 Responsible Disclosure Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* KNOWLEDGE SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start pt-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">
            <span className="text-red-500 underline">Knowledge</span> is a wise investment
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl leading-relaxed">
            By combining easy-to-understand information with actionable insights, Our company helps make the market seem less daunting—and more approachable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white font-semibold">
            <span className="bg-blue-700 px-3 py-1 rounded-full">LEARN</span>
            <span>↔</span>
            <span className="bg-blue-700 px-3 py-1 rounded-full">UNDERSTAND</span>
            <span>↔</span>
            <span className="bg-blue-700 px-3 py-1 rounded-full">TRADE</span>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg p-6 flex flex-col items-start">
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="font-semibold text-lg">Trade Academy</h3>
          <p className="text-sm text-gray-600 my-2">Reprehenderit in voluptate velit esse cillum dolore laboris aute irure.</p>
          <button className="bg-indigo-900 text-white px-4 py-2 rounded-md mt-auto">Start Learning</button>
        </div>
      </div>
    </div>
  );
}
