'use client';

import React, { useEffect, useState } from 'react';
import useReceiverAddress from '@/hooks/useReceiverAddress';
import useUser from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { QRCodeCanvas } from 'qrcode.react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ReceiverModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user } = useUser();
  const router = useRouter();
  const {
    receiverAddress,
    fetchReceiverAddress,
    addOrUpdateReceiverAddress,
    loading,
  } = useReceiverAddress(user?._id as string);

  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user?._id && isOpen) fetchReceiverAddress();
  }, [user, isOpen]);

  const handleSubmit = async () => {
    if (input.trim()) {
      const success = await addOrUpdateReceiverAddress(input.trim());
      if (success) {
        setEditing(false);
        setInput('');
        onClose();
        router.push('/dashboard');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-[#1f1f1f] border border-purple-700 text-white rounded-lg p-6 shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          {receiverAddress && !editing ? 'Your Receiver Address' : 'Add / Update Receiver Address'}
        </h2>

        {!editing && receiverAddress ? (
          <div className="space-y-4 text-center">
            <p className="text-gray-300 break-all">{receiverAddress}</p>
            <QRCodeCanvas
              value={receiverAddress}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              includeMargin={true}
              className="mx-auto"
            />
            <button
              onClick={() => setEditing(true)}
              className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white"
            >
              Update Address
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter receiver address"
              className="w-full px-4 py-3 mb-4 rounded-md bg-[#121212] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white transition"
            >
              {loading ? 'Saving...' : 'Save Address'}
            </button>
          </div>
        )}

        <button
          onClick={() => {
            onClose();
            router.push('/dashboard');
          }}
          className="mt-4 w-full py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-white transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiverModal;
