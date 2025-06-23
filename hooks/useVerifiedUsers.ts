// hooks/useVerifiedUsers.ts
'use client';

import { useEffect, useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

export type VerifiedUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  verification_document: string;
};

export default function useVerifiedUsers() {
  const [users, setUsers] = useState<VerifiedUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerifiedUsers = async () => {
      try {
        const res = await apiService.get('/user/verified-users-with-docs');
        setUsers(res.data.data);
      } catch (error: any) {
        showToast(error?.response?.data?.message || 'Failed to fetch verified users', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchVerifiedUsers();
  }, []);

  const downloadDocument = async (userId: string) => {
  try {
    const res = await apiService.get(`/user/view-document/${userId}`, {
      responseType: 'blob',
    });

    // Force PDF content type
    const blob = new Blob([res.data], { type: 'application/pdf' });

    const contentDisposition = res.headers['content-disposition'];
    const match = contentDisposition?.match(/filename="?(.+)"?/);
    const fileName = match?.[1] || 'document.pdf';

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    showToast(error?.response?.data?.message || 'Failed to download document', 'error');
  }
};


  return { users, loading, downloadDocument };
}
