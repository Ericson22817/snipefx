'use client';

import { useState, useCallback } from 'react';
import apiService from '@/lib/apiService';
import { toast } from 'react-toastify';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  balance?: number;
  earnings?: number;
}

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchAllUsers = useCallback(async () => {
    try {
      const res = await apiService.get('/wallet/users');
      setUsers(res.data.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to fetch users');
    }
  }, []);

  const fetchUserById = useCallback(async (userId: string) => {
    setLoading(true);
    try {
      const res = await apiService.get(`/wallet/users/${userId}`);
      setSelectedUser(res.data.data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  }, []);

  const addEarningsToUser = useCallback(async (userId: string, amount: number) => {
    try {
      const res = await apiService.post(`/wallet/earnings/${userId}`, { amount });
      toast.success('Earnings added successfully');
      return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to add earnings');
      throw err;
    }
  }, []);

  return {
    users,
    selectedUser,
    loading,
    fetchAllUsers,
    fetchUserById,
    addEarningsToUser,
    setSelectedUser,
  };
}
