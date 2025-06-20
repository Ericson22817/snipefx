import Image from 'next/image'
import React from 'react'

const PremiumChoice = () => {
  return (
    <div className='md:w-[50%] mx-auto  p-10'>3
    <div className="text-center">

        <span className="text-center text-white  bg-amber-700 px-2 py-0.5 rounded">Fast execution, low latency ➔</span>
    </div>
    <p className="text-center  md:text-5xl text-3xl mt-8 font-bold text-white">Your premium choice for trading currencies & stocks online</p>
    <p className="text-center text-gray-400 mt-8">Harness the power of technology to make a quicker, smarter and more precise decision on CFD currency pairs, stocks, commodities and more</p>
    <div className="mt-8">
        <Image src="/images/in-equity-2-img.png" alt="Premium Choice Image" width={800} height={400} className="w-full h-auto object-cover rounded-lg" />
    </div>
    </div>
  )
}

export default PremiumChoice