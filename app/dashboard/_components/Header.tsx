'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import useUser from '@/hooks/useAuth';

const Header = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className="bg-[#6d28d9] text-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        {/* Top row for logo + logout */}
        <div className="w-full flex items-center justify-between md:justify-start md:gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={160}
              height={60}
              priority
              className="object-contain"
            />
          </div>

          {/* Logout button */}
          <div className="flex flex-col items-center cursor-pointer" onClick={handleLogout} title="Logout">
            <FiLogOut size={24} className="hover:text-red-400 transition" />
            <span className="text-xs mt-1">Logout</span>
          </div>
        </div>

        {/* Verification banner - shown at bottom on mobile, in-line on desktop */}
        {user && user.isAccountVerified === false && (
          <div className="w-full md:w-auto bg-white text-red-800 font-semibold px-4 py-2 rounded text-center text-sm">
            Your account is <strong>not verified</strong>.{' '}
            <Link href="/dashboard/profile" className="text-blue-700 underline">
              Complete verification
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
