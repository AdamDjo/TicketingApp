'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Register = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    /*add validation there*/
    if (!email || !password) {
      return;
    }
    try {
      const res = await fetch('/api/Users', {
        method: 'POST',
        headers: {
          'Content-Type': 'appilication/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.status === 400) {
        setError('All fields are required');
        console.log('All fields are required');
      }
      if (res.status === 409) {
        setError('Email already registred');
        console.log('email registred');
      }

      if (res.status === 200) {
        router.push('/login');
        // router.refresh();
      }
    } catch (error) {
      console.log('form of register not submited');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-8 rounded shadow-md w-96">
        <h1 className="text-center">Register</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="form-control disp"
            placeholder="Name"
            required
          ></input>
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
            Register
          </button>
          <p className="text-center text-red-400">{error && error}</p>
        </form>
        <Link
          className="block text-center  text-blue-50 hover:text-blue-200"
          href="/login"
        >
          Login with another account
        </Link>
      </div>
    </div>
  );
};

export default Register;
