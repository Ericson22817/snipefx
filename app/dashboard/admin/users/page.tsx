'use client';

import React, { useEffect, useState } from 'react';
import useUsers, { User } from '@/hooks/useAdminUser'; // ensure this includes deductEarningsFromUser
import { Dialog } from '@headlessui/react';
import { toast } from 'react-toastify';

export default function UsersPage() {
  const {
    users,
    selectedUser,
    fetchAllUsers,
    addEarningsToUser,
    deductEarningsFromUser,
    setSelectedUser,
  } = useUsers();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [isDeducting, setIsDeducting] = useState(false); // New

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const handleOpenModal = (user: User, deduct = false) => {
    setSelectedUser(user);
    setIsDeducting(deduct);
    setAmount('');
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    if (!selectedUser || !amount) {
      toast.error("Please enter an amount.");
      return;
    }

    try {
      if (isDeducting) {
        await deductEarningsFromUser(selectedUser._id, Number(amount));
        toast.success('Earnings deducted successfully');
      } else {
        await addEarningsToUser(selectedUser._id, Number(amount));
        toast.success('Earnings added successfully');
      }

      setIsModalOpen(false);
      fetchAllUsers();
    } catch {
      // toast is handled in hook
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
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-t border-gray-700">
                <td className="p-2">{user.firstName} {user.lastName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2 flex gap-2">
                  <button
                    onClick={() => handleOpenModal(user, false)}
                    className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
                  >
                    Add Earnings
                  </button>
                  <button
                    onClick={() => handleOpenModal(user, true)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Deduct Earnings
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="bg-[#1f1f1f] w-full max-w-md p-6 rounded shadow-lg text-white border border-gray-700">
            <Dialog.Title className="text-lg font-bold mb-4">
              {isDeducting ? 'Deduct' : 'Add'} Earnings for {selectedUser?.firstName} {selectedUser?.lastName}
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
                className={`px-4 py-2 rounded ${
                  isDeducting ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'
                }`}
                onClick={handleSubmit}
                disabled={!amount}
              >
                {isDeducting ? 'Deduct' : 'Add'}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
