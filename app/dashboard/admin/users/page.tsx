'use client';

import React, { useEffect, useState } from 'react';
import useUsers, { User } from '@/hooks/useAdminUser'; // make sure path matches
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';

export default function UsersPage() {
  const {
    users,
    selectedUser,
    fetchAllUsers,
    addEarningsToUser,
    setSelectedUser,
  } = useUsers();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const handleOpenModal = (user: User) => {
    setSelectedUser(user); // fix: directly set the selected user
    setIsModalOpen(true);
  };

  const handleAddEarning = async () => {
    if (!selectedUser || !amount) {
      toast.error("Please enter an amount.");
      return;
    }

    try {
      await addEarningsToUser(selectedUser._id, Number(amount));
      setIsModalOpen(false);
      setAmount('');
      fetchAllUsers(); // Refresh list
    } catch {
      // error toast handled in hook
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Users</h1>
      <div className="overflow-auto">
        <table className="w-full border border-gray-700 rounded text-sm text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t border-gray-700">
                <td className="p-2">{user.firstName} {user.lastName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleOpenModal(user)}
                    className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                  >
                    Add Earnings
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-[#1f1f1f] w-full max-w-md p-6 rounded shadow-lg text-white border border-gray-700">
            <Dialog.Title className="text-lg font-bold mb-4">
              Add Earnings for {selectedUser?.firstName} {selectedUser?.lastName}
            </Dialog.Title>

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full p-2 bg-[#121212] rounded border border-gray-600 mb-4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
                onClick={handleAddEarning}
                disabled={!amount}
              >
                Add
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
