'use client';

import { useEffect, useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';
import axios from 'axios';

export type VerifiedUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  verification_document: string;
};

interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export default function useVerifiedUsers() {
  const [users, setUsers] = useState<VerifiedUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerifiedUsers = async () => {
      try {
        const res = await apiService.get<ApiResponse<VerifiedUser[]>>(
          '/user/verified-users-with-docs'
        );
        if (res.data?.data) {
          setUsers(res.data.data);
        } else {
          throw new Error(res.data?.message || 'Unexpected response structure');
        }
      } catch (error) {
        const msg = axios.isAxiosError(error)
          ? error.response?.data?.message
          : 'Failed to fetch verified users';
        showToast(msg, 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchVerifiedUsers();
  }, []);

  const downloadDocument = (userId: string) => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/view-document/${userId}`;
    window.open(url, '_blank');
  };

  return { users, loading, downloadDocument };
}
