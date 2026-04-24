import parsePath from './parsePath';

type Res = {
  type: 'normal';
  currentDirectory: string;
  result: string;
};

export default function cd(arg: string, currentDirectory: string): Res {
  let errorMsg = '';
  let path = '';
  if (!arg) {
    currentDirectory = '~';
    return { type: 'normal', currentDirectory, result: '' };
  } else if (arg.startsWith('~')) {
    path = arg;
  } else {
    path = currentDirectory + '/' + arg;
  }
  const res = parsePath(path);
  if (res.type === 'file') {
    errorMsg = `cd: ${arg}: Not a directory`;
    return { type: 'normal', currentDirectory, result: errorMsg };
  } else if (res.type === 'dirctory') {
    currentDirectory = res.path;
    return { type: 'normal', currentDirectory, result: '' };
  }
  errorMsg = `cd: ${arg}: No such file or directory`;
  return { type: 'normal', result: errorMsg, currentDirectory };
}
