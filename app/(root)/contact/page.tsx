'use client';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { FiUser, FiMail, FiEdit2 } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-white px-6 sm:px-12 md:px-24 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-400 max-w-2xl mb-12">
        Do not hesitate to reach out. Just fill in the contact form here and we’ll be sure to reply as fast as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-4">
          <div>
            <h2 className="font-semibold mb-1">Message us</h2>
            <p className="text-gray-400 text-sm">support@snipefxpro.com</p>
          </div>
          <div className="flex gap-4 text-lg mt-4">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-white text-black px-4 py-2 rounded w-full">
              <FiUser className="mr-2" />
              <input
                type="text"
                placeholder="Full name"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
            <div className="flex items-center bg-white text-black px-4 py-2 rounded w-full">
              <FiMail className="mr-2" />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="flex items-center bg-white text-black px-4 py-2 rounded w-full">
            <FiEdit2 className="mr-2" />
            <input
              type="text"
              placeholder="Subject"
              className="bg-transparent focus:outline-none w-full"
            />
          </div>
          <div className="bg-white text-black px-4 py-2 rounded">
            <textarea
              placeholder="Message"
              rows={6}
              className="bg-transparent focus:outline-none w-full resize-none"
            />
          </div>
          <button className="bg-[#040a3c] text-white px-6 py-2 rounded hover:bg-blue-900 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
