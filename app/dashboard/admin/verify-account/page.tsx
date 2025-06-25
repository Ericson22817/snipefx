'use client';

import React, { useCallback } from 'react';
import useVerifiedUsers from '@/hooks/useVerifiedUsers';
import useDeleteUser from '@/hooks/useDeleteUser';
import { Trash2, Download } from 'lucide-react';
import { Tooltip } from 'react-tooltip';

export default function VerifiedUsersPage() {
  const { users, loading, downloadDocument, } = useVerifiedUsers();

  const { deleteUser } = useDeleteUser();

  const handleDelete = useCallback(
    (userId: string) => {
      if (confirm('Are you sure you want to delete this user?')) {
        deleteUser(userId);
      }
    },
    [deleteUser]
  );

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
                <th className="p-4 border-b border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-900">
                  <td className="p-4 border-b border-gray-700">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="p-4 border-b border-gray-700">{user.email}</td>
                  <td className="p-4 border-b border-gray-700 flex space-x-4 items-center">
                    <div data-tooltip-id={`download-${user._id}`} data-tooltip-content="Download Document">
                      <Download
                        size={18}
                        className="text-blue-400 cursor-pointer hover:text-blue-600"
                        onClick={() => downloadDocument(user._id)}
                      />
                    </div>
                    <div data-tooltip-id={`delete-${user._id}`} data-tooltip-content="Delete User">
                      <Trash2
                        size={18}
                        className="text-red-400 cursor-pointer hover:text-red-600"
                        onClick={() => handleDelete(user._id)}
                      />
                    </div>

                    {/* Tooltips */}
                    <Tooltip id={`download-${user._id}`} />
                    <Tooltip id={`delete-${user._id}`} />
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
