/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

interface DepositAddressResponse {
  depositAddress: string;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function usePlatformDepositAddress() {
  const [address, setAddress] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch platform deposit address
  const fetchAddress = async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<string>>('/wallet/deposit-address');
      setAddress(res.data.data); // This should be the plain string
    } catch (error: any) {
      showToast(error?.response?.data?.message || 'Failed to fetch deposit address', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Save or update platform deposit address (admin only)
  const saveAddress = async (depositAddress: string) => {
    setLoading(true);
    try {
      const res = await apiService.post<ApiResponse<DepositAddressResponse>>('/wallet/deposit-address', {
        depositAddress,
      });
      showToast(res.data.message ?? 'Deposit address saved', 'success');
      setAddress(res.data.data.depositAddress);
    } catch (error: any) {
      showToast(error?.response?.data?.message || 'Failed to save address', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return {
    address,
    loading,
    fetchAddress,
    saveAddress,
  };
}
