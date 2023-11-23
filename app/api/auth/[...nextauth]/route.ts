import NextAuth from 'next-auth';
import { Account, User as AuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

import UserModel from '@/app/(models)/User';
import connectDB from '@/app/utils/db';
import bcrypt from 'bcrypt';

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
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
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == 'credentials') {
        return true;
      }
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
