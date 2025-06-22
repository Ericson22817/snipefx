'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // handle login API
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-100 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-indigo-700">Welcome Back!</h2>
          <p className="text-sm text-indigo-600">
            Login to continue trading with Citrust Fx Options.
          </p>
        </div>
        <img src="/images/welcome-illustration.png" alt="Welcome" className="h-24" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2">
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

        <div className="col-span-2 relative">
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

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
