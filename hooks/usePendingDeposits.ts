/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function usePendingDeposits() {
  const [pendingDeposits, setPendingDeposits] = useState<PendingDeposit[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPendingDeposits = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<PendingDeposit[]>>('/wallet/deposits/pending');
      if (res.data?.data) {
        setPendingDeposits(res.data.data);
        setError(null);
      } else {
        throw new Error(res.data?.message || 'Unexpected response structure');
      }
    } catch (err) {
      const message =
        (err as any)?.response?.data?.message || (err as Error).message || 'Failed to fetch pending deposits';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPendingDeposits();
  }, [fetchPendingDeposits]);

  return {
    pendingDeposits,
    loading,
    error,
    refetch: fetchPendingDeposits,
  };
}
