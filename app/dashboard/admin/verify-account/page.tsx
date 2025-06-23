'use client';

import React from 'react';
import useVerifiedUsers from '@/hooks/useVerifiedUsers';

export default function VerifiedUsersPage() {
  const { users, loading, downloadDocument } = useVerifiedUsers();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Verified Users with Documents</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-400">No verified users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-700 rounded-md">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="p-4 border-b border-gray-600">Name</th>
                <th className="p-4 border-b border-gray-600">Email</th>
                <th className="p-4 border-b border-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-900">
                  <td className="p-4 border-b border-gray-700">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="p-4 border-b border-gray-700">{user.email}</td>
                  <td className="p-4 border-b border-gray-700">
                    <button
                      onClick={() => downloadDocument(user._id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Download Document
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
