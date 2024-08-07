import React from 'react';
import { Button } from './ui/button';
import { signOut, auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function LogoutBtn() {
  const session = await auth();
  if (!session) {
    redirect('/signIn');
  }
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit" className="text-app-primary">
        Sign Out
      </button>
    </form>
  );
}
