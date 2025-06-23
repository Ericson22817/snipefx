/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import useUser from '@/hooks/useAuth';
import useWallet from '@/hooks/useWallet';
import { toast } from 'react-hot-toast';

const ITEMS_PER_PAGE = 10;

const Transaction = () => {
  const { user } = useUser();
  const { getTransactionHistory } = useWallet();
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (!user?._id) return;

    const fetchTransactions = async () => {
      try {
        const res = await getTransactionHistory(user._id);
        setTransactions(res?.transactions || []);
      } catch {
        toast.error('Failed to fetch transactions');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user?._id, getTransactionHistory]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : transactions.length === 0 ? (
        <p className="text-gray-500">No transactions found.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-700 bg-[#1f1f1f] rounded-lg">
              <thead>
                <tr className="text-left border-b border-gray-600">
                  <th className="p-3">Type</th>
                  <th className="p-3">Amount (USD)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Reference</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((tx: any) => (
                  <tr
                    key={tx.reference}
                    className="border-b border-gray-700 hover:bg-[#2a2a2a]"
                  >
                    <td className="p-3 capitalize">{tx.type}</td>
                    <td className="p-3">${tx.amount.toFixed(2)}</td>
                    <td
                      className={`p-3 ${
                        tx.status === 'successful'
                          ? 'text-green-400'
                          : tx.status === 'pending'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}
                    >
                      {tx.status}
                    </td>
                    <td className="p-3 break-all">{tx.reference}</td>
                    <td className="p-3">
                      {new Date(tx.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Transaction;
