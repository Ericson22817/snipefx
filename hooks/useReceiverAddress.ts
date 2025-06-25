'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import apiService from '@/lib/apiService';

interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function useReceiverAddress(userId: string) {
  const [receiverAddress, setReceiverAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchReceiverAddress = async () => {
    setLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await apiService.get<ApiResponse<any>>(`/wallet/receiver-address/${userId}`);
      setReceiverAddress(res.data.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setReceiverAddress(null);
      toast.error(error?.response?.data?.message || 'Failed to fetch receiver address');
    } finally {
      setLoading(false);
    }
  };

  const addOrUpdateReceiverAddress = async (address: string) => {
    setLoading(true);
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await apiService.post<ApiResponse<any>>(`/wallet/receiver-address`, {
        userId,
        receiverAddress: address,
      });
      setReceiverAddress(res.data.data.receiverAddress);
      toast.success('Receiver address saved.');
      return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || 'Failed to save receiver address');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    receiverAddress,
    fetchReceiverAddress,
    addOrUpdateReceiverAddress,
    loading,
  };
}
