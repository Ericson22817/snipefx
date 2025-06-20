'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/slide1.png',
    headline: 'Get more <span class="text-white">freedom</span> in the markets.',
    description: 'Trade Cryptocurrencies, Stock Indices, Commodities and Forex from a single account',
  },
  {
    id: 2,
    image: '/images/slide2.png',
    headline: 'Unlock <span class="text-white">opportunity</span> through trading.',
    description: 'Access global financial markets from one secure platform',
  },
]

const HeroSlider = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity md:px-48 duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Ensure parent is relative and height is defined for `fill` to work */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay content */}
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center px-24">
            <div className="text-white max-w-xl space-y-6">
              <h1
                className="text-5xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: slide.headline }}
              />
              <p className="text-lg">{slide.description}</p>
              <div className="flex gap-4">
                <button className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700 transition">
                  Login Account
                </button>
                <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
                  Register Account
                </button>
              </div>
              <p className="text-xs text-gray-300 mt-4">
                <span className="text-blue-400">*</span>Trading in Forex/ CFDs is highly speculative and carries a high level of risk.
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
        aria-label="Previous Slide"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
        aria-label="Next Slide"
      >
        &#8250;
      </button>
    </div>
  )
}

export default HeroSlider
