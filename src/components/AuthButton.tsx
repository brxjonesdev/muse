'use client';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function AuthButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthed = false;
  return (
    <>
      {isAuthed ? (
        children
      ) : (
        <Link
          href="/auth"
          className="bg-app-primary text-white px-4 py-2 rounded-md hover:bg-app-secondary hover:text-black"
        >
          Login / Sign Up
        </Link>
      )}
    </>
  );
}
