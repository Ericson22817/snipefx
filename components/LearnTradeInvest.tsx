'use client'

import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'

const boxes = [
  {
    title: 'Learn',
    subtitle: 'KNOWLEDGE TO GET STARTED',
    points: [
      'FREE Demo Account',
      'Step-by-step tutorials & articles',
      'Online webinars & local seminars',
      'Your own Account Manager',
    ],
    button: 'Open Account',
  },
  {
    title: 'Trade',
    subtitle: 'TAKE YOUR FIRST PROFIT',
    points: [
      'Tight spreads',
      'Superfast trade execution',
      'Hi-tech forex trading tools',
      'Ultimate risk protection & security',
    ],
    button: 'Open Account',
  },
  {
    title: 'Invest',
    subtitle: 'CHOOSE THE BEST PORTFOLIO',
    points: [
      'No need to be an experienced',
      'Large number of strategies',
      'Profit whenever Managers earn',
      'Full control of your Investment',
    ],
    button: 'Start following',
  },
]

const LearnTradeInvest = () => {
  return (
    <section className="bg-black text-white px-4 md:px-48 py-16">
      {/* Top Benefits Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 text-center gap-6 mb-12">
        {[
          'Wide Range of Trading Instruments',
          'Unparalleled Trading Conditions',
          'Globally Licensed & Regulated',
          'Committed to Forex Education',
          'Regular Contests & Promotions',
        ].map((item, index) => (
          <div key={index} className="text-sm font-semibold leading-snug">
            {item}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boxes.map((box, i) => (
          <motion.div
            key={i}
            className="border border-blue-500 rounded-2xl p-6 bg-gradient-to-bl from-[#0e0e0e] to-black relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            {/* Heading */}
            <h3 className="text-xl font-bold mb-1">{box.title}</h3>
            <p className="text-sm text-gray-400 mb-6">{box.subtitle}</p>

            {/* List */}
            <ul className="space-y-4 mb-6">
              {box.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheck className="text-blue-500 mt-1" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-auto w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold">
              {box.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default LearnTradeInvest
