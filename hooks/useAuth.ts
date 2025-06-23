// hooks/useAuth.ts
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import apiService from '@/lib/apiService';
import { showToast } from '@/lib/toast';

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  gender: string;
  country: string;
  salaryRange: string;
  verify_email: boolean;
  last_login_date: string | null;
  status: string;
  forgot_password_otp: string | null;
  forgot_password_expiry: string | null;
  role: string;
  isVerified: boolean;
  isAccountVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export function useRegister() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const register = async (formData: any) => {
    setLoading(true);
    try {
      const res = await apiService.post('/user/register', formData);
      showToast(res?.data.message, 'success');
      router.push('/login');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Registration failed';
      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading };
}

export function useLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (formData: any) => {
    setLoading(true);
    try {
      const res = await apiService.post('/user/login', formData);
      const { accesstoken, user } = res?.data?.data;

      localStorage.setItem('token', accesstoken);
      localStorage.setItem('email', user.email);

      showToast('Login successful', 'success');
      router.push('/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const msg = error?.response?.data?.message || 'Login failed';
      showToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiService.get('/user/user-details');
        setUser(res.data.data as User);
      } catch (error: any) {
        console.error('❌ Failed to fetch user details:', error.response?.data || error.message);
        setUser(null);
        setError(error.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
}
