'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import useUser from '@/hooks/useAuth'; // import hook

const Header = () => {
  const router = useRouter();
  const { user } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <header className="bg-[#6d28d9] text-white w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
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

        {/* Verification Notice */}
        {user && user.isAccountVerified === false && (
          <div className="bg-white text-red-800 font-semibold px-4 py-2 rounded text-center text-sm sm:text-base max-w-md w-full">
            Your account is <strong>not verified</strong>.{' '}
            <Link href="/dashboard/profile" className="text-blue-700 underline">
              Complete verification
            </Link>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          title="Logout"
          className="text-white hover:text-red-400 transition duration-150"
        >
          <FiLogOut size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
