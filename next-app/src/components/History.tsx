'use client';
import useUserInput from '@/hooks/useUserInput';
import Prompt from './Prompt';
import Content from '@/file-contents/Content';
import type { FileType } from '@/types/file-tree';
import type { LsResult } from '@/types/history';

export default function History() {
  const { history } = useUserInput();
  return (
    <>
      {history.map((h, index) => (
        <div key={index}>
          <Prompt currentDirectory={h.currentDirectory} />
          <span>{h.userInput}</span>
          <H type={h.type} result={h.result} />
        </div>
      ))}
    </>
  );
}

type LsRes = {
  type: FileType;
  name: string;
};

type Props = {
  type: 'normal' | 'content' | 'ls';
  result: string | LsResult;
};

function H({ type, result }: Props) {
  if (type === 'normal' && typeof result === 'string') {
    return <div>{result}</div>;
  } else if (type === 'content' && typeof result === 'string') {
    return <Content content={result} />;
  } else if (type === 'ls' && Array.isArray(result)) {
    return (
      <div className="space-x-6">
        {result.map((r, index) => (
          <Ls type={r.type} name={r.name} key={index} />
        ))}
      </div>
    );
  }
}

function Ls({ type, name }: LsRes) {
  if (type === 'directory') {
    return <span className="text-[#3b8eea] font-bold">{name}</span>;
  } else {
    return <span>{name}</span>;
  }
}
