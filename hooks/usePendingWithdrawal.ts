'use client';

import { useState, useEffect, useCallback } from 'react';
import apiService from '@/lib/apiService';
import { toast } from 'react-hot-toast';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface PendingDeposit {
  type: string;
  amount: number;
  status: string;
  reference: string;
  initiatedBy: string;
  createdAt: string;
  user: User;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function usePendingWithdrawal() {
  const [pendingDeposits, setPendingDeposits] = useState<PendingDeposit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPendingDeposits = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<PendingDeposit[]>>('/wallet/withdrawals/pending');
      setPendingDeposits(res.data.data);
      setError(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message || 'Failed to fetch pending deposits';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPendingDeposits();
  }, [fetchPendingDeposits]);

  return { pendingDeposits, loading, error, refetch: fetchPendingDeposits };
}
