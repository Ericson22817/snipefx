/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useDepositAddress.ts
'use client';

import { useEffect, useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

interface DepositAddress {
  _id: string;
  currency: string;
  address: string;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function usePlatformDepositAddress() {
  const [addresses, setAddresses] = useState<DepositAddress[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<DepositAddress[]>>('/wallet/deposit-address');
      setAddresses(res.data.data);
    } catch (error: any) {
      showToast(error?.response?.data?.message || 'Failed to fetch deposit addresses', 'error');
    } finally {
      setLoading(false);
    }
  };

  const saveAddress = async (currency: string, address: string, id?: string) => {
    setLoading(true);
    try {
      const url = id ? `/wallet/deposit-address/${id}` : '/wallet/deposit-address';
      const method = id ? apiService.put : apiService.post;
      const res = await method<ApiResponse<DepositAddress[]>>(url, { currency, address });
      showToast(res.data.message ?? 'Deposit address saved', 'success');
      setAddresses(res.data.data);
    } catch (error: any) {
      showToast(error?.response?.data?.message || 'Failed to save address', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return {
    addresses,
    loading,
    fetchAddresses,
    saveAddress,
  };
}
