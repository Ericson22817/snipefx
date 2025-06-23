'use client';

import React from 'react';
import useAdminWalletStats from '@/hooks/useAdminWalletStats';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const AdminDashboard = () => {
  const { data, loading } = useAdminWalletStats();

  const chartData = [
    { name: 'Pending Deposits', value: data?.pendingDeposits.length || 0 },
    { name: 'Pending Withdrawals', value: data?.pendingWithdrawals.length || 0 },
    { name: 'Active Deposits', value: data?.activeDeposits.length || 0 },
    { name: 'Earnings', value: data?.earnings || 0 },
  ];

  const recentTransactions = data?.allTransactions
    ?.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5) || [];

  return (
    <div className="p-6 text-white bg-[#0a0a0a] min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Wallet Analytics</h1>

      {loading ? (
        <p>Loading stats...</p>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {chartData.map((item, idx) => (
              <div key={idx} className="bg-[#1f1f1f] p-4 rounded">
                <h3 className="text-sm text-gray-400">{item.name}</h3>
                <p className="text-lg font-bold">{item.name === 'Earnings' ? `$${item.value}` : item.value}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-[#1f1f1f] p-6 rounded-lg mb-8">
            <h2 className="text-lg font-semibold mb-4">Analytics Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6d28d9" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Transactions */}
          <div className="bg-[#1f1f1f] p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#2b2b2b] text-gray-400">
                  <tr>
                    <th className="p-2">User</th>
                    <th className="p-2">Type</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Status</th>
                    <th className="p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((tx, idx) => (
                    <tr key={idx} className="border-t border-gray-700 hover:bg-[#2a2a2a] transition">
                      <td className="p-2">{tx.user?.firstName} {tx.user?.lastName}</td>
                      <td className="p-2 capitalize">{tx.type}</td>
                      <td className="p-2">${tx.amount}</td>
                      <td className="p-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          tx.status === 'pending' ? 'bg-yellow-600' :
                          tx.status === 'successful' ? 'bg-green-600' :
                          'bg-red-600'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="p-2">{new Date(tx.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
