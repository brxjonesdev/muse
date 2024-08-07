import { signIn } from 'next-auth/react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import AuthButton from '../AuthButton';
import { FlipWords } from '../ui/flip-words';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className=" flex items-center justify-center flex-col space-y-12 mt-16">
      <div className="flex flex-col text-center items-center space-y-4 md:max-w-[700px]">
        <Badge
          variant="default"
          className="h-[30px] w-fit bg-white text-black/90 hover:bg-white"
        >
          created by @brxjonesdev
        </Badge>
        <h2 className="text-3xl font-bold md:text-6xl ">
          Empower your sound, engage your fans.
        </h2>
        <p className="text-md w-[350px] md:text-xl md:w-[600px]">
          Share your unique sound and connect with fans. Muse is the place where
          your stories and vision comes to resonate.
        </p>
        <Link href="/signIn">
          <Button className="bg-app-primary hover:bg-app-secondary">
            Get Started with Muse
          </Button>
        </Link>
      </div>
      <img
        src="https://thebiaslist.com/wp-content/uploads/2024/06/red-velvet-cosmic.jpg"
        style={{ aspectRatio: '200/200', objectFit: 'cover' }}
        alt="hero"
        className="w-[800px] h-[500px] rounded-xl"
      />
    </section>
  );
}
