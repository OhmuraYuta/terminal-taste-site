import { Roboto_Mono } from 'next/font/google';
import ActivPrompt from './ActivPrompt';
import History from './History';

const robotoMono = Roboto_Mono();

export default function Terminal() {
  return (
    <div className={`${robotoMono.className} terminal px-2`}>
      <History />
      <ActivPrompt />
    </div>
  );
}
