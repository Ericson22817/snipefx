// hooks/useWallet.ts
'use client';

import apiService from '@/lib/apiService';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';

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


export default function useWallet() {
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWallet = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiService.get('/wallet');
      setWallet(res.data.data);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch wallet');
    } finally {
      setLoading(false);
    }
  }, []);

  const requestDeposit = useCallback(async (amount: number) => {
    try {
      const res = await apiService.post('/wallet/deposit', { amount });
      toast.success('Deposit initiated');
      return res.data.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Deposit request failed');
    }
  }, []);

  const withdraw = useCallback(async (amount: number) => {
    try {
      const res = await apiService.post('/wallet/withdraw', { amount });
      toast.success('Withdrawal successful');
      return res.data.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Withdrawal failed');
    }
  }, []);

  const getTransactionHistory = useCallback(async (id: string, filters?: { type?: string; startDate?: string; endDate?: string }) => {
    try {
      const params = new URLSearchParams(filters as any).toString();
      const res = await apiService.get(`/wallet/transactions/${id}${params ? `?${params}` : ''}`);
      return res.data.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to fetch transactions');
    }
  }, []);

  const exportTransactionsToCSV = useCallback(async (id: string) => {
    try {
      const res = await apiService.get(`/wallet/transactions/export/${id}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'transactions.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to export transactions');
    }
  }, []);

  const getWalletDetailsByUserId = useCallback(async (userId: string) => {
    try {
      const res = await apiService.get(`/wallet/user/${userId}`);
      return res.data.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to fetch user wallet');
    }
  }, []);

  const approveDeposit = useCallback(async ({ userId, reference }: { userId: string; reference: string }) => {
    try {
      const res = await apiService.post('/wallet/approve', { userId, reference });
      toast.success('Deposit approved');
      return res.data.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Approval failed');
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
  };
}