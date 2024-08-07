import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <section className="bg-white/10 text-white p-8 rounded-md min-h-[200px] flex items-center">
      <div className="container flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Muse</h2>
          <p className="text-lg">Your story deserves to be heard</p>
        </div>
        <div></div>
      </div>
    </section>
  );
}
