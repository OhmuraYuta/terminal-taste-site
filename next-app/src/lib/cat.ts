import parsePath from './parsePath';

type Res = {
  type: 'normal' | 'content';
  result: string;
};

export default function cat(arg: string, currentDirectory: string): Res {
  let path = '';
  if (arg && arg.startsWith('~')) {
    path = arg;
  } else if (arg) {
    path = currentDirectory + '/' + arg;
  } else {
    path = currentDirectory;
  }
  const res = parsePath(path);
  if (res.type === 'dirctory') {
    return { type: 'normal', result: `cat: ${arg}: Is a directory` };
  } else if (res.type === 'file') {
    return { type: 'content', result: res.content };
  }
  return { type: 'normal', result: `cat: ${arg}: No such file or directory` };
}
