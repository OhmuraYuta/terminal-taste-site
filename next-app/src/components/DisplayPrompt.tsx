'use client';
import { useState, useEffect } from 'react';
import useCatchKey from '@/hooks/useCatchKey';

export default function DisplayPrompt() {
  const [currentDirectory, setCurrentDirectory] = useState<string>('~');
  const lastKeys = useCatchKey();

  return (
    <>
      <div>
        <span className="text-[#21c080] font-bold">guest@Ohmura&apos;s-portfolio-site</span>
        <span>:</span>
        <span className="text-[#3b8eea]">{currentDirectory}</span>
        <span>$</span>
        <span>{lastKeys}</span>
      </div>
    </>
  );
}
