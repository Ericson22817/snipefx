import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-[#6d28d9] py-4 text-center">
        <h1 className="text-xl font-bold">
           <Image src="/images/logo.png" alt="Logo" width={180} height={100} priority />
        </h1>
      </div>
  )
}

export default Header