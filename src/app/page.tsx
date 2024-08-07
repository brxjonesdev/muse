import Image from 'next/image';
import NavBar from '@/components/landing_page/Navbar';
import Hero from '@/components/landing_page/Hero';
import ProjectDescription from '@/components/landing_page/ProjectDescription';
import Features from '@/components/landing_page/Features';
import CTA from '@/components/landing_page/CTA';
import Footer from '@/components/landing_page/Footer';

export default function Home() {
  return (
    <main className=" bg-app-background min-h-dvh">
      <NavBar />
      <div className="container space-y-20 text-app-text ">
        <Hero />
        <ProjectDescription />
        <Features />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
