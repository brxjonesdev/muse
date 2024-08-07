import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="">
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-2xl font-bold  md:text-4xl text-center">
          Sounds good? We thought so too.
        </h2>
        <Link href="/signIn" className="w-full md:max-w-[600px]">
          <Button className="bg-app-primary hover:bg-app-secondary md:min-h-[100px] md:w-full text-2xl">
            Get Started with Muse
          </Button>
        </Link>
      </div>
    </section>
  );
}
