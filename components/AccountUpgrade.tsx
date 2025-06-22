'use client';

import React from 'react';
import { Check } from 'lucide-react';

type Plan = {
  title: string;
  minFunding: string;
  minDeposit: string;
  minProfit: string;
  maxProfit: string;
  features: string[];
  buttonColor: string;
};

const plans: Plan[] = [
  {
    title: 'STARTER',
    minFunding: '$600',
    minDeposit: '$600',
    minProfit: '$2,500',
    maxProfit: '$5,000',
    features: [
      'Highly-regarded trader education*',
      'Advanced risk management',
      'Tax-free spread betting profits',
      'Low minimum deposit',
    ],
    buttonColor: 'border-white text-white',
  },
  {
    title: 'PREMIUM',
    minFunding: '$1500',
    minDeposit: '$1500',
    minProfit: '$10,500',
    maxProfit: '$15,000',
    features: [
      'Expert news & analysis',
      'Competitive spreads',
      'Advanced trading tools',
      'Tax-free spread betting profits',
    ],
    buttonColor: 'bg-blue-600 text-white border-0',
  },
  {
    title: 'VIP MEMBERSHIP',
    minFunding: '$5000',
    minDeposit: '$15,000',
    minProfit: '$20,000',
    maxProfit: '$35,000',
    features: [
      'With Full Executive benefits...',
      'Highly-regarded trader education*',
      'Advanced risk management',
      'Tax-free spread betting profits',
      'Low minimum deposit',
    ],
    buttonColor: 'border-white text-white',
  },
  {
    title: 'FOREX SIGNAL SUBSCRIPTION',
    minFunding: '$20,000',
    minDeposit: '$20,000',
    minProfit: '$50,000',
    maxProfit: '$75,000',
    features: [
      'Professional Forex Signals',
      'Up to 10 Signals/day',
      '95% Success Rate',
      'Support 24/7',
      'No Experience Required',
      'Advanced trading tools',
      'Pay using bitcoin only',
      'Use any broker',
    ],
    buttonColor: 'bg-blue-600 border-0 text-white',
  },
];

export default function AccountUpgrade() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Upgrade <span className="underline decoration-red-600">account</span> Higher
        </h1>
        <p className="text-gray-300 mt-3 text-sm sm:text-base">
          Simply select your preferred account type in our application form.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                <div className="text-sm text-gray-300">MINIMUM FUNDING</div>
                <div className="text-white bg-blue-600 inline-block px-2 py-1 rounded text-xs font-semibold">
                  {plan.minFunding}
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-gray-400 text-sm mb-4">
                {index === 0
                  ? 'Benefit from industry-leading entry prices'
                  : index === 1
                  ? 'Receive even tighter spreads and commissions'
                  : plan.features[0]}
              </p>

              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                <li>
                  <Check className="inline w-4 h-4 text-blue-400 mr-2" />
                  min. possible deposit: {plan.minDeposit}
                </li>
                <li>
                  <Check className="inline w-4 h-4 text-blue-400 mr-2" />
                  min. expected profit: {plan.minProfit}
                </li>
                <li>
                  <Check className="inline w-4 h-4 text-blue-400 mr-2" />
                  max. expected profit: {plan.maxProfit}
                </li>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <Check className="inline w-4 h-4 text-blue-400 mr-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-auto w-full rounded px-4 py-2 border ${plan.buttonColor} hover:opacity-90`}
            >
              Open an account →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
