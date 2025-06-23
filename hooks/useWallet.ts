'use client';

import { useState, useEffect, useCallback } from 'react';
import apiService from '@/lib/apiService';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';

interface Transaction {
  type: string;
  amount: number;
  status: string;
  reference: string;
  initiatedBy: string;
  approvedBy?: string;
  createdAt: string;
}

interface WalletData {
  balance: number;
  earnings: number;
  pendingWithdrawal: number;
  activeDeposits: number;
  lastDeposit: number;
  totalDeposit: number;
  successfulDeposit: number;
  pendingDeposit: number;
  transactions: Transaction[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function useWallet() {
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: unknown, fallback: string) => {
    const axiosErr = err as AxiosError<{ message?: string }>;
    const msg = axiosErr?.response?.data?.message || fallback;
    toast.error(msg);
    setError(msg);
  };

  const fetchWallet = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiService.get<ApiResponse<WalletData>>('/wallet');
      setWallet(res.data.data);
      setError(null);
    } catch (err) {
      handleError(err, 'Failed to fetch wallet');
    } finally {
      setLoading(false);
    }
  }, []);

  const requestDeposit = useCallback(async (amount: number) => {
    try {
      const res = await apiService.post<ApiResponse<unknown>>('/wallet/deposit', { amount });
      toast.success('Deposit initiated');
      return res.data.data;
    } catch (err) {
      handleError(err, 'Deposit request failed');
    }
  }, []);

  const withdraw = useCallback(async (amount: number) => {
    try {
      const res = await apiService.post<ApiResponse<unknown>>('/wallet/withdraw', { amount });
      toast.success('Withdrawal successful');
      return res.data.data;
    } catch (err) {
      handleError(err, 'Withdrawal failed');
    }
  }, []);

  const getTransactionHistory = useCallback(async (
    id: string,
    filters?: { type?: string; startDate?: string; endDate?: string }
  ) => {
    try {
      const params = new URLSearchParams(filters as Record<string, string>).toString();
      const res = await apiService.get<ApiResponse<WalletData>>(
        `/wallet/transactions/${id}${params ? `?${params}` : ''}`
      );
      return res.data.data;
    } catch (err) {
      handleError(err, 'Failed to fetch transactions');
    }
  }, []);

  const exportTransactionsToCSV = useCallback(async (id: string) => {
    try {
      const res = await apiService.get<Blob>(`/wallet/transactions/export/${id}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([res?.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'transactions.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      handleError(err, 'Failed to export transactions');
    }
  }, []);

  const getWalletDetailsByUserId = useCallback(async (userId: string) => {
    try {
      const res = await apiService.get<ApiResponse<WalletData>>(`/wallet/user/${userId}`);
      return res.data.data;
    } catch (err) {
      handleError(err, 'Failed to fetch user wallet');
    }
  }, []);

  const approveDeposit = useCallback(async ({ userId, reference }: { userId: string; reference: string }) => {
    try {
      const res = await apiService.post<ApiResponse<unknown>>('/wallet/approve', { userId, reference });
      toast.success('Deposit approved');
      return res.data.data;
    } catch (err) {
      handleError(err, 'Approval failed');
    }
  }, []);

  const approveWithdrawal = useCallback(async ({ userId, reference }: { userId: string; reference: string }) => {
    try {
      const res = await apiService.post<ApiResponse<unknown>>('/wallet/withdrawal/approve', {
        userId,
        reference,
      });
      toast.success('Withdrawal approved');
      return res.data.data;
    } catch (err) {
      handleError(err, 'Approval failed');
    }
  }, []);

  useEffect(() => {
    fetchWallet();
  }, [fetchWallet]);

  return {
    wallet,
    loading,
    error,
    fetchWallet,
    requestDeposit,
    withdraw,
    getTransactionHistory,
    exportTransactionsToCSV,
    getWalletDetailsByUserId,
    approveDeposit,
    approveWithdrawal,
  };
}
