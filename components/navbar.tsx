'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="bg-black text-white px-6 lg:px-24">
      <div className="flex justify-between items-center py-6 border-b border-white">
        <Image src="/images/logo.png" alt="Logo" width={180} height={100} priority />

        {/* Desktop Navbar (lg and above) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-lg ${
                pathname === href
                  ? 'font-bold text-blue-500'
                  : 'opacity-70 hover:opacity-100 text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Login | Signup
          </Link>
        </nav>

        {/* Mobile Toggle Button (visible below lg) */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (only visible when toggled open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 py-4 border-b border-gray-700">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base px-2 ${
                pathname === href
                  ? 'font-bold text-blue-500'
                  : 'text-white opacity-80 hover:opacity-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-blue-500 border border-blue-500 rounded px-4 py-2 text-center mt-2 mx-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login | Signup
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
