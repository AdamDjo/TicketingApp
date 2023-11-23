'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const session = useSession();
  /*if authenticated*/
  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.replace('/TicketPage');
    }
  }, [session, router]);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    /*add validation there*/
    if (!email || !password) {
      return;
    }
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError('Invalid email or password');
      if (res.url) router.replace('/TicketsPage');
    } else {
      setError('');
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-8 rounded shadow-md w-96">
        <h1 className="text-center">Login</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            className="form-control disp"
            placeholder="Email"
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            required
          ></input>
          <button className="btn p-2 my-5" type="submit">
            Login
          </button>
          <p className="text-center text-red-400">{error && error}</p>
        </form>
        <Link
          className="block text-center  text-blue-50 hover:text-blue-200"
          href="/register"
        >
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;
