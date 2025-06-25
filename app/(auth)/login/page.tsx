'use client';

import { useLogin } from '@/hooks/useAuth';
import Link from 'next/link';
import { useState } from 'react';


export default function LoginForm() {
  const { login, loading } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(form); // 🔥 Call custom hook
  };

  return (
    <div className="max-w-2xl mx-auto my-10 items-center justify-center bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-100 p-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-indigo-700">Welcome Back!</h2>
          <p className="text-sm text-indigo-600">
            Login to continue trading with Snipe Fx Pro.
          </p>
        </div>
        <img src="/images/welcome-illustration.png" alt="Welcome" className="h-24" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 grid bg-gray-800 grid-cols-1 md:grid-cols-2 gap-4">
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
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        
      </form>
        <p className="text-center mb-2 text-white">Don&apos;t have an account? <Link href="/register" className='text-blue-600'>Register</Link></p>
    </div>
  );
}
