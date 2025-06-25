// components/AdminDepositSettings.tsx
'use client';

import React, { useState } from 'react';
import usePlatformDepositAddress from '@/hooks/useDepositAddress';

export default function AdminDepositSettings() {
  const { addresses, loading, saveAddress } = usePlatformDepositAddress();

  const [form, setForm] = useState({
    currency: '',
    address: '',
    editId: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.currency || !form.address) return;
    await saveAddress(form.currency, form.address, form.editId || undefined);
    setForm({ currency: '', address: '', editId: '' });
  };

  const handleEdit = (id: string, currency: string, address: string) => {
    setForm({ currency, address, editId: id });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Admin: Manage Deposit Addresses</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Currency (e.g., USDT)"
          value={form.currency}
          onChange={(e) => setForm({ ...form, currency: e.target.value })}
          className="p-2 rounded border bg-[#1a1a1a] text-white"
        />
        <input
          type="text"
          placeholder="Deposit Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="p-2 rounded border bg-[#1a1a1a] text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          {form.editId ? 'Update' : 'Add'}
        </button>
      </form>

      {loading && <p className="text-gray-400 mb-4">Loading...</p>}

      {addresses.length === 0 ? (
        <p className="text-gray-400">No deposit addresses added yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-600">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-2 border-b border-gray-600">Currency</th>
              <th className="p-2 border-b border-gray-600">Address</th>
              <th className="p-2 border-b border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((item) => (
              <tr key={item._id} className="hover:bg-gray-900">
                <td className="p-2 border-b border-gray-700">{item.currency}</td>
                <td className="p-2 border-b border-gray-700">{item.address}</td>
                <td className="p-2 border-b border-gray-700">
                  <button
                    onClick={() => handleEdit(item._id, item.currency, item.address)}
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
