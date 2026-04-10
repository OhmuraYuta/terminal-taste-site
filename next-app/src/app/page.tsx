import DisplayPrompt from '@/components/DisplayPrompt';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono();

export default function Home() {
  return (
    <div className={`bg-[#1e1e1e] h-screen text-white ${robotoMono.className}`}>
      <DisplayPrompt />
    </div>
  );
}
