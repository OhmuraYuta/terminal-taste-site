'use client';
import useUserInput from '@/hooks/useUserInput';
import Prompt from './Prompt';

export default function History() {
  const { history } = useUserInput();
  return (
    <>
      {history.map((h, index) => (
        <div key={index}>
          <Prompt currentDirectory={h.currentDirectory} />
          <span>{h.userInput}</span>
          <div>{h.result}</div>
        </div>
      ))}
    </>
  );
}
