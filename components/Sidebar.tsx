'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiHome,
  FiBarChart2,
  FiUsers,
  FiDollarSign,
} from 'react-icons/fi';
import Image from 'next/image';

const menu = [
  { label: 'Dashboard', icon: FiHome, path: '/dashboard/admin' },
  { label: 'Pending Deposit', icon: FiBarChart2, path: '/dashboard/admin/pending-deposite' },
  { label: 'Pending Withdrawal', icon: FiBarChart2, path: '/dashboard/admin/withdrawals' },
  { label: 'Verified Account', icon: FiDollarSign, path: '/dashboard/admin/verify-account' },
  { label: 'Users', icon: FiUsers, path: '/dashboard/admin/users' },
  { label: 'Wallet Address', icon: FiUsers, path: '/dashboard/admin/wallet-address' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 h-screen bg-gray-900 text-gray-300 w-16 md:w-64 p-2 flex flex-col z-50">
      <div className="text-lg font-bold text-center mb-4 hidden md:block">
        <Image src="/images/logo.png" alt="Logo" width={180} height={100} priority />
      </div>
      <nav className="flex-1 space-y-1">
        {menu.map((item, i) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={i}
              href={item.path}
              className={`flex items-center px-3 py-2 rounded-md hover:bg-gray-800 transition ${
                isActive ? 'bg-gray-800 text-white font-semibold' : ''
              }`}
            >
              <Icon size={20} />
              <span className="ml-3 hidden md:inline">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
