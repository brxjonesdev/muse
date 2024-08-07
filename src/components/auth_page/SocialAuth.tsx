import React from 'react';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth';

export default function SocialAuth({ mode }: { mode: 'login' | 'signup' }) {
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signIn('google', {
            redirectTo: '/home',
          });
        }}
        className="w-full"
      >
        <Button type="submit" className="w-full bg-app-secondary text-app-text">
          {mode === 'login' ? 'Sign in' : 'Sign up'} with Google
        </Button>
      </form>
    </>
  );
}
