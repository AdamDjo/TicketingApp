import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from './db';
import { UserType } from '@/types/user.types';
import bcrypt from 'bcrypt';
import UserModel from '@/app/(models)/User';
export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        /*connecting logic*/
        await connectDB();
        try {
          const user = await UserModel.findOne({ email: credentials.email });
          /* if user have password correct*/
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          console.log('cannot connect', error);
        }
      },
    }),

    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == 'credentials') {
        return true;
      }
    },
  },
};
