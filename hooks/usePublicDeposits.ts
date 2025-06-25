'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import apiService from '@/lib/apiService';

dayjs.extend(relativeTime);

interface Deposit {
  gateway: string;
  name: string;
  amount: string;
  time: string; // formatted relative time (e.g., "4 hours ago")
}
interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}
export default function usePublicDeposits() {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDeposits = async () => {
      try {
        setLoading(true);
        const res = await apiService.get<ApiResponse<Deposit[]>>('/wallet/public/active-deposits');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formatted = res.data.data.map((tx: any) => ({
          gateway: tx.gateway,
          name: tx.name,
          amount: tx.amount,
          time: dayjs(tx.time).fromNow(),
        }));
        setDeposits(formatted);
      } catch (err) {
        console.error('Failed to load public deposits:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeposits();
  }, []);

  return { deposits, loading };
}
