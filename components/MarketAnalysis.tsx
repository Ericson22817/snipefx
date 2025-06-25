import Image from 'next/image'
import React from 'react'

const MarketAnalysis = () => {
  return (
    <div className="bg-black text-white mb-10 px-6 py-16">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">In-Depth daily market analysis</h2>
        <p className="text-gray-300">Get timely news & analysis from top financial experts</p>

        <div className="mt-10 space-y-8">
          <h3 className="text-xl font-semibold">
            We help our customers engage investors so their companies can grow
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our customers look to us as guides, and we weave our deep legal and technical experience into our software and services.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-10 mt-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a.75.75 0 00-1.41 0L3.614 17.635a.75.75 0 001.034.956l4.792-2.197 2.852 4.564a.75.75 0 001.368-.558l-1.048-5.777 4.792 2.197a.75.75 0 001.034-.956L10.894 2.553z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">35817</p>
                <span className="text-sm bg-blue-600 px-2 py-1 rounded">Business launch</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 1c-3.31 0-6 2.014-6 4.5V17h12v-1.5c0-2.486-2.69-4.5-6-4.5z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">4400</p>
                <span className="text-sm bg-blue-600 px-2 py-1 rounded">Investor engaged</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Testimonial 1 */}
        <div className="border border-blue-600 rounded-lg p-6 space-y-4 bg-[#0d0d0d]">
          <div className="flex items-center gap-4">
            <Image
              src="/images/user1.jpeg" // Replace with actual path or use next/image from public folder
              alt="Kimberly Adams"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <p className="italic text-sm text-gray-200">
            I had never operated with any broker, I am paying to learn and with my losses I am developing a different way of working on the platform. I do not blame them for my losses because I lack the knowledge, planning, strategy and discipline that I am gradually getting...
          </p>
          <p className="font-semibold text-sm">Kimberly Adams</p>
          <p className="text-xs text-gray-400">UNITED STATES</p>
        </div>

        {/* Testimonial 2 */}
        <div className="border border-blue-600 rounded-lg p-6 space-y-4 bg-[#0d0d0d]">
          <div className="flex items-center gap-4">
            <Image
              src="/images/user2.jpeg" // Replace with actual path or use next/image from public folder
              alt="Mandeep Singh"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <p className="italic text-sm text-gray-200">
            I&apos;ve just got started with forex and The Alert Nation have helped me so much. They gave me a free course and Jamie and Luke gave me their direct contact number so they could answer all my questions and guide me through everything...
          </p>
          <p className="font-semibold text-sm">MANDEEP SINGH</p>
          <p className="text-xs text-gray-400">INDIA</p>
        </div>
      </div>
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Testimonial 1 */}
        <div className="border border-blue-600 rounded-lg p-6 space-y-4 bg-[#0d0d0d]">
          <div className="flex items-center gap-4">
            <Image
              src="/images/user3.jpeg" // Replace with actual path or use next/image from public folder
              alt="Kimberly Adams"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <p className="italic text-sm text-gray-200">
            I had never operated with any broker, I am paying to learn and with my losses I am developing a different way of working on the platform. I do not blame them for my losses because I lack the knowledge, planning, strategy and discipline that I am gradually getting...
          </p>
          <p className="font-semibold text-sm">Kimberly Adams</p>
          <p className="text-xs text-gray-400">UNITED STATES</p>
        </div>

        {/* Testimonial 2 */}
        <div className="border border-blue-600 rounded-lg p-6 space-y-4 bg-[#0d0d0d]">
          <div className="flex items-center gap-4">
            <Image
              src="/images/user4.png" // Replace with actual path or use next/image from public folder
              alt="Mandeep Singh"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>
          <p className="italic text-sm text-gray-200">
            I&apos;ve just got started with forex and The Alert Nation have helped me so much. They gave me a free course and Jamie and Luke gave me their direct contact number so they could answer all my questions and guide me through everything...
          </p>
          <p className="font-semibold text-sm">MANDEEP SINGH</p>
          <p className="text-xs text-gray-400">INDIA</p>
        </div>
      </div>
    </div>
  )
}

export default MarketAnalysis