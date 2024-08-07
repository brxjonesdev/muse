import React from 'react';
import { AudioWaveform } from 'lucide-react';
import Link from 'next/link';

const LOGO_WIDTH = 30;

export default function NavBar() {
  return (
    <section className="py-4 bg-white/10 w-full">
      <div className="flex items-center gap-12 text-app-text container">
        <div className="flex items-center gap-1">
          <AudioWaveform className={`w-[${LOGO_WIDTH}px]`} />
          <p className="text-xl">Muse</p>
        </div>
        <ul className="flex gap-3">
          <Link href="#">Documentation</Link>
          <Link href="#">DevBlog</Link>
        </ul>
      </div>
    </section>
  );
}
