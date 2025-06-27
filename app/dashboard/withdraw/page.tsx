'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import useWallet from '@/hooks/useWallet';
import ReceiverModal from './_components/ReceiverModal';

export default function WithdrawPage() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { withdraw } = useWallet();

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    setLoading(true);
    const result = await withdraw(Number(amount));
    setLoading(false);

    if (result) {
      toast.success('Withdrawal request submitted.');
      setShowModal(true); // Show modal instead of routing
    }
  };

  return (
    <>
      <div className="p-6  bg-[#0a0a0a] mt-24 flex justify-center items-center">
        <form
          onSubmit={handleWithdraw}
          className="w-full max-w-md bg-[#1f1f1f] p-6 rounded-lg shadow-lg border border-purple-700"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Request Withdrawal</h1>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 mb-4 rounded-md bg-[#121212] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all"
          >
            {loading ? 'Processing...' : 'Submit Withdrawal'}
          </button>
        </form>
      </div>

      <ReceiverModal isOpen={showModal} onClose={() => router.push('/dashboard')} />
    </>
  );
}
