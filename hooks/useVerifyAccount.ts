// hooks/useVerifyAccount.ts
'use client';

import { useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

export default function useVerifyAccount() {
  const [loading, setLoading] = useState(false);

  const verifyAccount = async (base64Document: string) => {
    setLoading(true);
    try {
      const res = await apiService.post('/user/verify-document', {
        base64Document,
      });
      showToast(res.data.message, 'success');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Verification failed';
      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return { verifyAccount, loading };
}
