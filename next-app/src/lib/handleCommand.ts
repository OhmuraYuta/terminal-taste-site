import ls from './ls';
import cd from './cd';
import cat from './cat';
import type { LsResult } from '@/types/history';

type Res =
  | {
      type: 'normal' | 'content';
      currentDirectory: string;
      result: string;
    }
  | {
      type: 'ls';
      currentDirectory: string;
      result: LsResult;
    };

export default function handleCommand(inputString: string, currentDirectory: string): Res {
  const command = inputString.split(' ')[0];
  console.log({ inputString, command });
  let result = '';
  if (command === 'ls') {
    const res = ls(inputString.split(' ')[1], currentDirectory);
    if (res.type === 'normal') {
      return { type: res.type, result: res.result, currentDirectory };
    }
    return { type: res.type, result: res.result, currentDirectory };
  } else if (command === 'cd') {
    const res = cd(inputString.split(' ')[1], currentDirectory);
    return { type: res.type, currentDirectory: res.currentDirectory, result: res.result };
  } else if (command === 'cat') {
    const res = cat(inputString.split(' ')[1], currentDirectory);
    if (res.type === 'normal') {
      return { result: res.result, currentDirectory, type: res.type };
    }
    return { result: res.result, currentDirectory, type: res.type };
  } else if (!inputString.trim()) {
    result = '';
  } else {
    result = `${command}: command not found`;
  }
  return { result, currentDirectory, type: 'normal' };
}
