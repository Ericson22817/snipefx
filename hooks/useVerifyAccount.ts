'use client';

import { useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';
import { AxiosError } from 'axios';

interface ApiResponse {
  message: string;
  success?: boolean;
}

export default function useVerifyAccount() {
  const [loading, setLoading] = useState(false);

  const verifyAccount = async (base64Document: string): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await apiService.post<ApiResponse>('/user/verify-document', {
        base64Document,
      });
      showToast(res.data.message, 'success');
      return true;
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      const msg = err.response?.data?.message || 'Verification failed';
      showToast(msg, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { verifyAccount, loading };
}
