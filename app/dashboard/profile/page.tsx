'use client';

import React, { useEffect, useState } from 'react';
import useUser from '@/hooks/useAuth';
import useVerifyAccount from '@/hooks/useVerifyAccount';

export default function ProfilePage() {
  const { user } = useUser();
  const { verifyAccount, loading: verifying } = useVerifyAccount();
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
  const [documentFile, setDocumentFile] = useState<File | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocumentFile(file);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleDocumentSubmit = async () => {
    if (!documentFile) return;
    const base64 = await convertToBase64(documentFile);
    await verifyAccount(base64);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally submit other profile changes
    console.log('📝 Submitted:', formData);
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen mb-14 px-4 sm:px-8 py-6">
      <h2 className="text-xl font-semibold mb-6">General Information</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] p-6 rounded-lg shadow-md max-w-3xl mx-auto"
      >
        {/* Avatar Preview */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden">
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-2xl">👤</div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['firstName', 'lastName', 'email', 'country', 'salaryRange'].map((field) => (
            <div key={field}>
              <label className="block mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                name={field}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value={(formData as any)[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#2b2b2b] text-white rounded-md outline-none"
                placeholder={`Enter ${field}`}
                disabled={field === 'email'}
              />
            </div>
          ))}

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
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-medium w-full sm:w-auto"
        >
          Update
        </button>
      </form>

      {/* Account Verification Section */}
      <div className="bg-[#1f1f1f] p-6 mt-8 rounded-lg shadow-md max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Verify Your Account</h3>

        {user?.isAccountVerified ? (
          <p className="text-green-500">✅ Your account is verified</p>
        ) : (
          <>
            <p className="mb-4 text-sm text-gray-400">
              Upload a valid government-issued ID (PDF or image)
            </p>
            <input type="file" accept="image/*,application/pdf" onChange={handleDocumentChange} />
            <button
              onClick={handleDocumentSubmit}
              disabled={verifying}
              className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-md font-medium w-full sm:w-auto"
            >
              {verifying ? 'Verifying...' : 'Submit for Verification'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
