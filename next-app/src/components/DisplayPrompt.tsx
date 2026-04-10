'use client';
import { useState, useEffect } from 'react';
import DisplayUserInput from './DisplayUserInput';

export default function DisplayPrompt() {
  const [currentDirectory, setCurrentDirectory] = useState<string>('~');

  return (
    <div>
      <span className="text-[#21c080] font-bold">guest@Ohmura&apos;s-portfolio-site</span>
      <span>:</span>
      <span className="text-[#3b8eea]">{currentDirectory}</span>
      <span>$</span>
      <DisplayUserInput />
    </div>
  );
}
