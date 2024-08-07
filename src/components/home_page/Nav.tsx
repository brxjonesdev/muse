import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import LogoutBtn from '../logout';

export default function Nav() {
  return (
    <section className="h-full w-[300px] mx-auto border-2 border-gray-800 p-2 rounded-lg mt-6">
      <Card className="w-full bg-transparent border-none text-app-text p-0">
        <CardHeader>
          <CardTitle>Muse</CardTitle>
          <CardDescription>Welcome In, User!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-col text-lg">
            <Link
              href="/"
              className="border-b-2 pb-1 hover:bg-app-accent rounded-t-lg pl-2"
            >
              Profile
            </Link>
            <Link
              href="/"
              className="border-b-2 pb-1 hover:bg-app-accent rounded-t-lg pl-2"
            >
              Messaging
            </Link>
            <Link
              href="/"
              className="border-b-2 pb-1 hover:bg-app-accent rounded-t-lg pl-2"
            >
              Groups
            </Link>
            <Link
              href="/home/settings"
              className="border-b-2 pb-1 hover:bg-app-accent rounded-t-lg pl-2"
            >
              Settings
            </Link>
          </div>
          <LogoutBtn />
        </CardContent>
        <CardFooter>
          <Button className="bg-app-primary w-full">Post</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
