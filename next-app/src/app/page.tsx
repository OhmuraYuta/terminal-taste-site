import { Roboto_Mono } from 'next/font/google';
import ActivPrompt from '@/components/ActivPrompt';
import History from '@/components/History';

const robotoMono = Roboto_Mono();

export default function Home() {
  return (
    <div className={`bg-[#1e1e1e] h-screen text-white ${robotoMono.className}`}>
      <History />
      <ActivPrompt />
    </div>
  );
}
