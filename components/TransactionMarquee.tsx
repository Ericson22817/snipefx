'use client';

import React, { useEffect, useRef } from 'react';

type Transaction = {
  gateway: string;
  name: string;
  amount: string;
  time: string;
};

interface Props {
  title: string;
  data: Transaction[];
}

const TransactionMarquee: React.FC<Props> = ({ title, data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      scrollAmount++;
      container.scrollTop = scrollAmount;

      if (scrollAmount >= container.scrollHeight / 2) {
        scrollAmount = 0;
        container.scrollTop = 0;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-center text-2xl font-bold text-purple-400 mb-4">{title}</h2>
      <div
        ref={containerRef}
        className="h-64 overflow-hidden relative"
      >
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-black text-yellow-400">
            <tr>
              <th className="py-2 px-4">Gateway</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {[...data, ...data].map((tx, index) => (
              <tr key={index} className=" border-gray-700">
                <td className="py-2 px-4">Bitcoin</td>
                <td className="py-2 px-4">{tx.name}</td>
                <td className="py-2 px-4">{tx.amount}</td>
                <td className="py-2 px-4">{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionMarquee;
