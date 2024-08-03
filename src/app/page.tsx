import Image from 'next/image';
import ProjectDescription from '@/components/Description';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh bg-app-background">
      <ProjectDescription />
    </main>
  );
}
