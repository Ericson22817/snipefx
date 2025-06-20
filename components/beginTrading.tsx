import Image from 'next/image'
import React from 'react'

const BeginTrading = () => {
  return (
    <div className='px-48 mt-8'>
        <div className="bg-gray-800 p-12">
            <div className="flex items-center justify-between">
                <h1 className='text-white text-4xl'>Begin trading in three steps</h1>
                <button className='bg-white bprder-0 py-2 px-6 font-bold rounded'>Open Account →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <div className="flex items-center gap-4 mt-8">
                        <span className='bg-white rounded-full py-4 px-6 text-xl'>1</span>
                        <div>
                            <h1 className='text-white font-bold text-xl mb-1'>Register</h1>
                            <p className='text-gray-400 text-lg'>Choose an account type and submit your application</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <span className='bg-white rounded-full py-4 px-6 text-xl'>2</span>
                        <div>
                            <h1 className='text-white font-bold text-xl mb-1'>Trade</h1>
                            <p className='text-gray-400 text-lg'>Access 180+ instruments across all asset classes on App.</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4 mt-8">
                        <span className='bg-white rounded-full py-4 px-6 text-xl'>3</span>
                        <div>
                            <h1 className='text-white font-bold text-xl mb-1'>Trade</h1>
                            <p className='text-gray-400 text-lg'>Access 180+ instruments across all asset classes on App.</p>
                        </div>

                    </div>
                </div>
                <div>
                    <Image src="/images/in-equity-12-mockup.png" alt="Begin Trading" width={500} height={300} className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BeginTrading