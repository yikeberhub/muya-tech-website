// src/app/(auth)/login/page.tsx
"use client"; // This component needs client-side interactivity

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // For navigation in App Router
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'; // Your typed Redux hooks
import { loginStart, loginSuccess, loginFailure } from '../../../redux/slices/authSlice';
// import { AppDataSource } from '../../../config/database'; // For direct DB interaction in client-side code, NOT recommended!
                                                         // REMOVE THIS. We will use API calls.
import { loginUser } from '../../../api/authApi'; // This function will call your backend API

import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

// Add metadata for this specific page
export const metadata = {
  title: 'Login | Muya Tech Portfolio',
  description: 'Login to your Muya Tech Portfolio account.',
};

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Redirect if already authenticated
  if (isAuthenticated) {
    router.push('/dashboard'); // Or wherever authenticated users go
    return null; // Or a loading spinner
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Call your API function here
      const data = await loginUser(email, password); // This should be an Axios call via api/authApi.ts
      dispatch(loginSuccess({ user: data.user, token: data.token }));
      router.push('/dashboard'); // Redirect on successful login
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Login failed';
      dispatch(loginFailure(errorMessage));
    }
  };

  return (
    <div className="w-full">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
            register for a new account
          </Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <Input
            label="Email address"
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4" // Add margin-bottom for spacing between inputs
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm text-center">{error}</div>
        )}

        <Button
          type="submit"
          className="w-full py-2 px-4"
          disabled={loading}
          size="lg" // Use the larger size
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}