'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <div className='px-24   bg-black'>
        <div className='py-12 border-b-1 border-white w-full flex items-center  justify-between'>

      <Image src="/images/logo.png" alt="Logo" width={200} height={100} priority />
      <div className='flex items-center gap-5'>
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={` text-lg ${pathname === href ? 'font-bold text-blue-500' : 'opacity-70 hover:opacity-100 text-white'}`}
          >
            {label}
          </Link>
        ))}
        <Link
          href='/login'
          className='border border-blue-500 text-blue-500 px-4 py-2 rounded'
        >
          Login | Signup
        </Link>
      </div>
        </div>
    </div>
  )
}

export default Navbar
