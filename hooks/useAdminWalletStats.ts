// hooks/useAdminWalletStats.ts
'use client';

import { useEffect, useState, useCallback } from 'react';
import apiService from '@/lib/apiService';
import { toast } from 'react-hot-toast';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Transaction {
  type: string;
  amount: number;
  status: string;
  reference: string;
  createdAt: string;
  user: User;
}

interface AdminWalletStats {
  pendingDeposits: Transaction[];
  pendingWithdrawals: Transaction[];
  activeDeposits: Transaction[];
  earnings: number;
  allTransactions: Transaction[];
}
interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}
export default function useAdminWalletStats() {
  const [data, setData] = useState<AdminWalletStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<AdminWalletStats>>('/wallet/stats');
      setData(res.data.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to fetch admin stats';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { data, loading, error, refetch: fetchStats };
}
