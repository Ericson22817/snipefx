import React from 'react'

const NewInvestment = () => {
  return (
    <div className="  flex items-center justify-center p-8">
      <div className="flex  flex-col md:flex-row md:max-w-6xl w-full rounded-lg overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="bg-[#06113C] text-white flex-1 p-10 space-y-6">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block">
            ANNOUNCING
          </span>
          <h1 className="text-4xl font-bold">
            $4.95{" "}
            <span className="font-medium">
              online stocks, currencies & commodities trades
            </span>
          </h1>
          <p className="text-sm text-gray-300">
            Stock Comissions from €3 on US stocks. Access 19,000+ stocks across
            core and emerging markets on 36 exchanges worldwide.
          </p>
          <button className="bg-white text-[#06113C] font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Learn more
          </button>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-[#2D4373] p-10 flex-1 space-y-6">
          <h2 className="text-white text-2xl font-semibold mb-4">
            New to investing? Start here.
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded border border-gray-400 text-white bg-[#2D4373] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded border border-gray-400 text-white bg-[#2D4373] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-4 py-3 rounded border border-gray-400 text-white bg-[#2D4373] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-black text-white font-semibold rounded hover:opacity-90"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewInvestment