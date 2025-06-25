// hooks/useDeleteUser.ts
'use client';

import { useState } from 'react';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

export default function useDeleteUser() {
  const [loading, setLoading] = useState(false);
 

  const deleteUser = async (userId: string) => {
    setLoading(true);
    try {
      await apiService.delete(`/user/${userId}`);
      showToast('User deleted successfully', 'success');

      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.response?.data?.message ?? 'Failed to delete user';
      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return { deleteUser, loading };
}
