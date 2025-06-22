import React from 'react';

const data = [
  { label: 'BSD‑USD', subtitle: 'Main USD', value: '$821.85', change: '+1,502.15%', positive: true },
  { label: 'BTC‑USD', subtitle: 'Bitcoin USD', value: '$455.81', change: '-1,025.05%', positive: false },
  { label: 'SOL‑USD', subtitle: 'Solana USD', value: '$581.85', change: '+9.25%', positive: true },
  { label: 'ETC‑USD', subtitle: 'Ethereum USD', value: '$1,125.85', change: '+7.05%', positive: true },
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {data.map((c, i) => (
        <div key={i} className="bg-gray-800 rounded-lg p-4 text-white flex flex-col space-y-2">
          <div className="flex justify-between">
            <div>
              <b>{c.label}</b>
              <p className="text-xs text-gray-400">{c.subtitle}</p>
            </div>
            <span
              className={`text-sm font-semibold ${c.positive ? 'text-green-400' : 'text-red-400'}`}
            >
              {c.change}
            </span>
          </div>
          <h2 className="text-lg font-bold">{c.value}</h2>
          <div className="h-10 bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  );
}
