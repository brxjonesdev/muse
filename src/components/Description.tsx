'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function ProjectDescription() {
  return (
    <DropdownMenu>
      <Card className="mx-4 max-w-[600px]">
        <CardHeader>
          <CardTitle>Muse: For Artists and Fans</CardTitle>
          <CardDescription>Connect, Share, and Grow with Muse</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            Muse is designed to empower music artists and their fans by
            providing a comprehensive platform for interaction, promotion, and
            commerce. Artists can customize their profiles, upload and stream
            music, list and sell merchandise, and engage with their fans through
            AMA-like message boards.
          </p>

          <p className="text-sm">
            I'll be building Muse from the ground up, using the latest
            technologies and best practices to ensure a seamless and enjoyable
            experience for all users. Click{' '}
            <DropdownMenuTrigger className='bg-black/10 rounded-md px-0.5'>here</DropdownMenuTrigger> to learn more about
            the project.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm">- Braxton Jones /<Link href="https://twitter.com/brxjonesdev" className='text-app-accent text-xs hover:underline cursor-pointer'> @brxjonesdev</Link></p>
        </CardFooter>
      </Card>
      <DropdownMenuContent>
        <DropdownMenuLabel>Important Links!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="hover:bg-app-accent cursor-pointer"
          onClick={() => {
            window.open(`
        https://github.com/brxjonesdev/muse
        `);
          }}
        >
          Github Repo
        </DropdownMenuItem>
        <DropdownMenuItem 
        className="hover:bg-app-accent cursor-pointer"
        onClick={() => {
            window.open(`
            https://github.com/users/brxjonesdev/projects/7/views/1
        `);
          }}
        >
          Kanban Board
        </DropdownMenuItem>
        <DropdownMenuItem 
        className="hover:bg-app-accent cursor-pointer"
        onClick={() => {
            window.open(`
            https://whimsical.com/muse-system-design-Rts8eVZGPP9UoEUPP3xU5N
        `);
          }}
        >
          System Design
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
