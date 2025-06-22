import { FiHome, FiBarChart2, FiUsers, FiDollarSign } from 'react-icons/fi';

import Image from 'next/image';

const menu = [
  { label: 'Dashboard', icon: FiHome },
  { label: 'Reports', icon: FiBarChart2 },
  { label: 'Initial Coin Offering', icon: FiDollarSign },
  { label: 'Currency Exchange', icon: FiBarChart2 },
  { label: 'Members', icon: FiUsers },
  { label: 'Tickers', icon: FiBarChart2 },
];

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-gray-300 w-16 md:w-64 p-2 flex flex-col">
      <div className="text-white text-xl font-bold px-3 py-4 flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={180} height={100} priority />
      </div>
      <nav className="mt-4 flex-1">
        {menu.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
              <Icon size={20} />
              <span className="ml-3 hidden md:inline">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
