import React from 'react';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import LogoutBtn from '@/components/logout';
import Post from '@/components/home_page/Feed/Post';
import FeedHeader from '@/components/home_page/Feed/FeedHeader';
const prisma = new PrismaClient();
export default async function Homepage() {
  const session = await auth();
  if (!session) {
    redirect('/signIn');
  }
  // Getting the user
  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id,
    },
  });

  // handle the case where the user is not found

  //Checking if the user is onboarded
  const isUserOnboarded = user?.isOnboarded;
  if (!isUserOnboarded) {
    redirect('/onboarding');
  }

  return (
    <section className="h-[100vh] w-[650px] mx-auto flex-grow border-x-2 border-gray-800 px-4 overflow-y-scroll pt-8 flex flex-col">
      <FeedHeader user={session.user} />
      <div className="w-full h-0.5 bg-gray-600 my-8" />
      {isUserOnboarded ? (
        <section className="rounded-b-lg h-full space-y-4 text-app-text flex-grow mb-2">
          {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
          <div className="bg-white/10 flex items-center h-full justify-center rounded-xl">
            <p className="max-w-[350px] text-center text-gray-600">
              No posts yet.
              <br /> Hopefully you'll be the first to post something!
            </p>
          </div>
        </section>
      ) : null}
    </section>
  );
}
