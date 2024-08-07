import React from 'react';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import Nav from '@/components/home_page/Nav';
import Onboarding from '@/components/home_page/Onboarding';

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" bg-app-background min-h-dvh flex flex-col">
      <Onboarding />
      <div className="flex justify-center w-fit self-center  gap-3 flex-grow">
        <Nav />
        {children}
        <section className="h-full w-[300px] mx-auto flex-grow border-2 border-gray-800 p-2  rounded-t-lg mt-6"></section>
      </div>
    </main>
  );
}
