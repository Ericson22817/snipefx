'use client';

import Link from 'next/link';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthFormProps {
  type: 'login' | 'register';
}

export default function AuthForm({ type }: AuthFormProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="bg-gray-600 p-8 rounded-md shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {type === 'login' ? 'Login' : 'Register'}
        </h2>

        {type === 'login' ? <LoginForm /> : <RegisterForm />}

        <p className="text-center text-sm text-gray-600 mt-6">
          {type === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
