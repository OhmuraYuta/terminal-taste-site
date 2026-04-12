import { Roboto_Mono } from 'next/font/google';
import ActivPrompt from './ActivPrompt';
import History from './History';

const robotoMono = Roboto_Mono();

export default function Terminal() {
  return (
    <div className={`bg-[#1e1e1e] h-screen text-white ${robotoMono.className}`}>
      <History />
      <ActivPrompt />
    </div>
  );
}
