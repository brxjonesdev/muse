import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signIn } from '@/lib/auth';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function LoginForm() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('resend', formData);
      }}
    >
      <div className="space-y-2">
        <Label>Email</Label>
        <div className="md:grid md:grid-cols-[2fr_1fr] w-full gap-3 space-y-4 md:space-y-0">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email here"
            className="w-full"
          />
          <Button
            type="submit"
            className="w-full bg-app-primary hover:bg-app-secondary"
          >
            Sign in with Email
          </Button>
        </div>
      </div>
    </form>
  );
}
