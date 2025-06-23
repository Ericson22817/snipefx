'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';
import useUser from '@/hooks/useAuth'; // import hook

const Header = () => {
  const router = useRouter();
  const { user } = useUser(); // get user

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="bg-[#6d28d9] py-4 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={180} height={100} priority />
      </div>

      {/* If user is not verified */}
      {user && user.isAccountVerified === false && (
        <div className=" text-red-800 font-bold text-lg px-4 py-2">
          Your account is <strong>not verified</strong>.{' '}
          <Link href="/dashboard/profile" className=" text-white underline ">
            Complete verification
          </Link>
        </div>
      )}

      {/* Logout */}
      <button
        onClick={handleLogout}
        title="Logout"
        className="text-white hover:text-red-400 transition duration-150"
      >
        <FiLogOut size={24} />
      </button>
    </div>
  );
};

export default Header;
