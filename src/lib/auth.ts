import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import Resend from 'next-auth/providers/resend';
import Google from 'next-auth/providers/google';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Resend({
      from: 'no-reply-muse@braxtonjones.dev',
    }),
  ],
  pages: {
    signIn: '/signIn',
  },
  callbacks: {},
});
