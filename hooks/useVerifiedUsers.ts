'use client';

import { useEffect, useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';
import axios, { AxiosResponse } from 'axios';

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
        const res: AxiosResponse<ApiResponse<VerifiedUser[]>> = await apiService.get('/user/verified-users-with-docs');
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

  const downloadDocument = async (userId: string) => {
    try {
      const res = await apiService.get<Blob>(`/user/view-document/${userId}`, {
        responseType: 'blob',
      });

      const blob = new Blob([res.data], { type: 'application/pdf' });

      // Extract filename from Content-Disposition
      const disposition = res.headers['content-disposition'];
      const fileNameMatch = disposition?.match(/filename="?(.+)"?/);
      const fileName = fileNameMatch?.[1] || 'document.pdf';

      // Trigger download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url); // Clean up
    } catch (error) {
      const msg = axios.isAxiosError(error)
        ? error.response?.data?.message
        : 'Failed to download document';
      showToast(msg, 'error');
    }
  };

  return { users, loading, downloadDocument };
}
