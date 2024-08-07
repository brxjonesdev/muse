import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import CreateAccount from '@/components/auth_page/CreateAccount';
import SocialAuth from '@/components/auth_page/SocialAuth';
import { SignInForm } from '@/forms/AccountForms';
import Image from 'next/image';
import LoginForm from '@/components/auth_page/Login';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { FlipWords } from '@/components/ui/flip-words';

export default async function AuthPage() {
  return (
    <div className="min-h-dvh md:grid md:grid-cols-[0.75fr_1fr] flex flex-col">
      <div className="">
        <img
          src="https://kpopping.com/documents/8a/5/1933/240628-Red-Velvet-Irene-Cosmic-at-Music-Bank-documents-1.jpeg?v=7a4ba"
          alt=""
          className="w-full min-h-full object-cover"
          style={{ aspectRatio: '200/200', objectFit: 'cover' }}
        />
        {/* <Image
          src="https://kpopping.com/documents/8a/5/1933/240628-Red-Velvet-Irene-Cosmic-at-Music-Bank-documents-1.jpeg?v=7a4ba"
          alt=""
          width="500"
          height="500"
          className="w-full h-full object-cover"
          style={{ aspectRatio: '500/500', objectFit: 'cover' }}
          /> */}
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="px-4 space-y-4 my-auto">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              Share your <FlipWords words={['sound', 'vision', 'story']} /> on
              Muse.
            </h1>
            <p className="text-muted-foreground md:text-lg">
              Enter your email to sign into your account.
            </p>
          </div>
          <div className="space-y-4">
            {/* <LoginForm />
            <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div> */}
            <SocialAuth mode="login" />
            {/* <CreateAccount /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
