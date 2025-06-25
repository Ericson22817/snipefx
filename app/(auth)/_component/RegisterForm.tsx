'use client';

import { useState } from 'react';
import countries from './countries.json';

const salaryRanges = [
  'Below $20,000',
  '$20,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000 - $200,000',
  'Above $200,000'
];

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    gender: '',
    country: '',
    salaryRange: ''
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle API submission
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Top Welcome Section */}
      <div className="bg-indigo-100 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-indigo-700">Welcome!</h2>
          <p className="text-sm text-indigo-600">
            Signup to continue trade with Snipe Fx pro.
          </p>
        </div>
        <img src="/images/welcome-illustration.png" alt="Welcome" className="h-24" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700">Salary Range</label>
          <select
            name="salaryRange"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          >
            <option value="">--SELECT RANGE--</option>
            {salaryRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter Phone Number"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          >
            <option value="">--SELECT GENDER--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            required
          >
            <option value="">--SELECT COUNTRY--</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[38px] text-sm text-gray-500"
            >
              👁
            </button>
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="flex items-center">
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Enter password"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-[38px] text-sm text-gray-500"
            >
              👁
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
