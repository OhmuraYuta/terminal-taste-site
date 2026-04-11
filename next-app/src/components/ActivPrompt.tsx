'use client';
import { useEffect, useRef } from 'react';
import Prompt from './Prompt';
import UserInput from './UserInput';
import useUserInput from '@/hooks/useUserInput';

export default function ActivPrompt() {
  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const { history } = useUserInput();
  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: 'instant' });
  }, [history]);
  return (
    <div ref={scrollBottomRef}>
      <Prompt currentDirectory="~" />
      <UserInput />
    </div>
  );
}
