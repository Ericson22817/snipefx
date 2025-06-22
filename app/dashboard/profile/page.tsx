'use client';

import React, { useEffect, useState } from 'react';
import useUser from '@/hooks/useAuth';

export default function ProfilePage() {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    gender: '',
    salaryRange: '',
    avatar: null as File | null,
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        country: user.country || '',
        gender: user.gender || '',
        salaryRange: user.salaryRange || '',
      }));
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📝 Submitted:', formData);
    // You can send the formData here to your backend
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen p-6">
      <h2 className="text-xl font-semibold mb-6">General Information</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] p-6 rounded-lg shadow-md max-w-3xl mx-auto"
      >
        {/* Avatar & File */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl">
                👤
              </div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
              placeholder="Last name"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
              placeholder="Enter your email"
              disabled
            />
          </div>
          <div>
            <label className="block mb-1">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
              placeholder="Enter country"
            />
          </div>

          <div>
            <label className="block mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">Salary Range</label>
            <input
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
              placeholder="Enter salary range"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
        >
          Update
        </button>
      </form>
    </div>
  );
}
