'use client';

import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';

import useWallet from '@/hooks/useWallet';
import usePlatformDepositAddress from '@/hooks/useDepositAddress';

export default function DepositPage() {
  const [amount, setAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [showModal, setShowModal] = useState(false);

  const { addresses } = usePlatformDepositAddress();
  const { requestDeposit } = useWallet();

  // Get the address for the selected currency
  const selectedAddress = addresses.find(
    (addr) => addr.currency === selectedCurrency
  )?.address;

  const handleCopy = async () => {
    if (!selectedAddress) return;
    try {
      await navigator.clipboard.writeText(selectedAddress);
      toast.success('Address copied to clipboard');
    } catch {
      toast.error('Failed to copy address');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const numericAmount = Number(amount);
    if (!selectedCurrency) {
      toast.error('Please select a platform');
      return;
    }
    if (!amount || numericAmount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    const result = await requestDeposit(numericAmount);
    if (result) {
      setShowModal(true);
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white mt-24 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1f1f1f] w-full max-w-md rounded-xl p-6 shadow-lg border border-purple-600"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Make a Deposit</h1>

        {/* Platform Dropdown */}
        <select
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
          className="w-full mb-4 p-3 rounded-md bg-[#121212] border border-gray-700 text-white"
        >
          <option value="">Select Platform</option>
          {addresses.map((item) => (
            <option key={item._id} value={item.currency}>
              {item.currency}
            </option>
          ))}
        </select>

        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter amount"
          className="w-full px-4 py-3 rounded-md bg-[#121212] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          type="submit"
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md font-medium transition-all"
        >
          Continue
        </button>
      </form>

      {/* Modal */}
      {showModal && selectedAddress && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-[#1f1f1f] p-6 rounded-lg w-full max-w-md text-center border border-gray-600">
            <h3 className="text-lg font-semibold mb-4">Deposit Address</h3>
            <p className="text-sm text-gray-300 mb-3">
              Send exactly <span className="font-semibold">{amount} USD</span> to this address:
            </p>

            <div className="bg-[#2b2b2b] px-3 py-2 rounded-md text-sm flex items-center justify-between gap-2 mb-4 overflow-auto">
              <span className="truncate">{selectedAddress}</span>
              <button onClick={handleCopy} title="Copy">
                <FaCopy className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="flex justify-center mb-4">
              <QRCodeCanvas
                value={selectedAddress}
                size={160}
                bgColor="#0a0a0a"
                fgColor="#ffffff"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => {
                  toast.success('Your deposit has been received.');
                  setShowModal(false);
                  window.location.href = '/dashboard';
                }}
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-md"
              >
                Deposit Made
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
