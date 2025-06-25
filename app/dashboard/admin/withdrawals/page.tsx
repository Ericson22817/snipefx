'use client';

import React, { useState } from 'react';
import useWallet from '@/hooks/useWallet';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import usePendingWithdrawal from '@/hooks/usePendingWithdrawal';

const AdminPage = () => {
  const { approveWithdrawal } = useWallet();
  const { pendingDeposits, loading, error, refetch } = usePendingWithdrawal();
  const [approving, setApproving] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(pendingDeposits.length / itemsPerPage);
  const paginatedData = pendingDeposits.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApprove = async (userId: string, reference: string) => {
    setApproving(reference);
    try {
      await approveWithdrawal({ userId, reference });
      toast.success('Withdrawal approved');
      await refetch();
    } catch {
      toast.error('Failed to approve withdrawal');
    } finally {
      setApproving(null);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Withdrawals</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : pendingDeposits.length === 0 ? (
        <p className="text-gray-500">No pending withdrawals</p>
      ) : (
        <>
          <div className="overflow-auto">
            <table className="min-w-full bg-[#1f1f1f] border border-gray-700 rounded-lg text-sm">
              <thead>
                <tr className="text-left border-b border-gray-600">
                  <th className="p-3">User</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Amount (USD)</th>
                  <th className="p-3">Reference</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((tx) => (
                  <tr key={tx.reference} className="border-b border-gray-700 hover:bg-[#2b2b2b]">
                    <td className="p-3 whitespace-nowrap">
                      {tx.user.firstName} {tx.user.lastName}
                    </td>
                    <td className="p-3 whitespace-nowrap">{tx.user.email}</td>
                    <td className="p-3 whitespace-nowrap">${tx.amount.toFixed(2)}</td>
                    <td className="p-3 whitespace-nowrap">{tx.reference}</td>
                    <td className="p-3 whitespace-nowrap">
                      {new Date(tx.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleApprove(tx.user._id, tx.reference)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md flex items-center gap-1 disabled:opacity-50"
                        disabled={approving === tx.reference}
                      >
                        {approving === tx.reference ? 'Approving...' : (
                          <>
                            <FaCheckCircle /> Approve
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="mt-4 flex justify-center items-center gap-2 text-sm">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPage;
