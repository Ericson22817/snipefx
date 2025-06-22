'use client';

import Link from 'next/link';
import React, { JSX } from 'react';
import { FaTachometerAlt, FaMoneyBillWave, FaUser, FaExchangeAlt, FaUserShield } from 'react-icons/fa';
import useUser from '@/hooks/useAuth';

const Bottom = () => {
  const { user } = useUser();

  const links: { label: string; path: string; icon: JSX.Element }[] = [
    { label: 'Dashboard', path: '/dashboard', icon: <FaTachometerAlt className="text-lg" /> },
    { label: 'Deposit', path: '/dashboard/deposit', icon: <FaMoneyBillWave className="text-lg" /> },
    { label: 'Transaction', path: '/dashboard/transactions', icon: <FaExchangeAlt className="text-lg" /> },
    { label: 'Withdrawal', path: '/dashboard/withdraw', icon: <FaMoneyBillWave className="text-lg rotate-180" /> },
    { label: 'Profile', path: '/dashboard/profile', icon: <FaUser className="text-lg" /> },
  ];

  if (user?.role === 'admin') {
    links.push({ label: 'Admin', path: '/dashboard/admin', icon: <FaUserShield className="text-lg" /> });
  }

  return (
    <div>
      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full bg-[#121212] flex justify-around items-center py-3 border-t border-gray-700 text-xs z-50">
        {links.map(({ label, path, icon }, idx) => (
          <Link href={path} key={idx} className="text-center flex flex-col items-center text-gray-300 hover:text-white transition">
            <div className="mb-1">{icon}</div>
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bottom;
