import parsePath from './parsePath';
import type { LsResult } from '@/types/history';

type Res =
  | {
      type: 'normal';
      result: string;
    }
  | {
      type: 'ls';
      result: LsResult;
    };

export default function ls(arg: string, currentDirectory: string): Res {
  let path = '';
  if (arg && arg.startsWith('~')) {
    path = arg;
  } else if (arg) {
    path = currentDirectory + '/' + arg;
  } else {
    path = currentDirectory;
  }
  const res = parsePath(path);
  if (res.type === 'file') {
    return { type: 'ls', result: [{ type: 'file', name: res.name }] };
  } else if (res.type === 'dirctory') {
    return { type: 'ls', result: res.childDirs };
  }
  return { type: 'normal', result: `ls: cannot access '${arg}': No such file or directory` };
}
