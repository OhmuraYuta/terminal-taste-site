'use client';
import useUserInput from '@/hooks/useUserInput';
import Prompt from './Prompt';
import Content from '@/file-contents/Content';

export default function History() {
  const { history } = useUserInput();
  return (
    <>
      {history.map((h, index) => (
        <div key={index}>
          <Prompt currentDirectory={h.currentDirectory} />
          <span>{h.userInput}</span>
          {h.isContent ? <Content content={h.result} /> : <div>{h.result}</div>}
        </div>
      ))}
    </>
  );
}
