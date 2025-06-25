'use client';

import { useState } from 'react';
import countries from '../_component/countries.json';
import Link from 'next/link';
import { useRegister } from '@/hooks/useAuth';

import
    {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from '@/components/ui/select';

const salaryRanges = [
    'Below $20,000',
    '$20,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $200,000',
    'Above $200,000'
];

export default function RegisterForm()
{
    const [showPassword, setShowPassword] = useState(false);
    const { register, loading } = useRegister();

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
        e: React.ChangeEvent<HTMLInputElement>
    ) =>
    {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        register(form);
    };

    return (
        <div className="max-w-4xl mx-auto my-10 bg-gray-800 rounded-lg shadow-md overflow-hidden">
            {/* Top Banner */}
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
            <form
                onSubmit={handleSubmit}
                className="px-4 sm:px-6 py-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* First Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter First Name"
                        className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter Last Name"
                        className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Salary Range */}
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Salary Range</label>
                    <Select
                        value={form.salaryRange}
                        onValueChange={(value) =>
                            setForm((prev) => ({ ...prev, salaryRange: value }))
                        }
                    >
                        <SelectTrigger className="w-full border border-gray-300">
                            <SelectValue placeholder="--SELECT SALARY RANGE--" />
                        </SelectTrigger>
                        <SelectContent className='bg-white text-black'>
                            {salaryRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                    {range}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter Email"
                        className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                    <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Enter Phone Number"
                        className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
                    <Select
                        value={form.gender}
                        onValueChange={(value) =>
                            setForm((prev) => ({ ...prev, gender: value }))
                        }
                    >
                        <SelectTrigger className="w-full border border-gray-300">
                            <SelectValue placeholder="--SELECT GENDER--" />
                        </SelectTrigger>
                        <SelectContent className='bg-white text-black'>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Country */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Country</label>
                    <Select
                        value={form.country}
                        onValueChange={(value) =>
                            setForm((prev) => ({ ...prev, country: value }))
                        }
                    >
                        <SelectTrigger className="w-full border border-gray-300">
                            <SelectValue placeholder="--SELECT COUNTRY--" />
                        </SelectTrigger>
                        <SelectContent className='bg-white text-black'>
                            {countries.map((country) =>
                                typeof country === 'string' ? (
                                    <SelectItem key={country} value={country}>
                                        {country}
                                    </SelectItem>
                                ) : (
                                    <SelectItem key={country} value={country}>
                                        {country}
                                    </SelectItem>
                                )
                            )}
                        </SelectContent>
                    </Select>
                </div>

                {/* Password */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-300">Password</label>
                    <div className="flex items-center">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter password"
                            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
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

                {/* Confirm Password */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-300">Confirm Password</label>
                    <div className="flex items-center">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm password"
                            className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-indigo-500"
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

                {/* Submit */}
                <div className="col-span-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
                    >
                        {loading ? 'Registering...' : 'Sign Up'}
                    </button>
                </div>
            </form>

            <p className="text-center mx-auto mb-3">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-600">Sign in</Link>
            </p>
        </div>
    );
}
