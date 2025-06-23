'use client';
import usePlatformDepositAddress from '@/hooks/useDepositAddress';
import React, { useState } from 'react';

const AdminDepositSettings = () => {
  const { address, loading, saveAddress } = usePlatformDepositAddress();
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    await saveAddress(input);
    setInput('');
  };

  return (
    <div className="p-4 max-w-md">
      <h2 className="text-xl font-bold mb-3">Admin: Set Deposit Address</h2>
      <p className="text-sm text-gray-300 mb-4">Current: {loading ? 'Loading...' : address}</p>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new deposit address"
          className="w-full p-2 rounded border bg-[#1a1a1a] text-white"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AdminDepositSettings;
