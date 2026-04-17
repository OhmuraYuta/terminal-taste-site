import parsePath from './parsePath';

type Res =
  | {
      type: 'success';
      currentDirectory: string;
    }
  | {
      type: 'error';
      errorMsg: string;
    };

export default function cd(arg: string, currentDirectory: string): Res {
  let errorMsg = '';
  let path = '';
  if (!arg) {
    currentDirectory = '~';
    return { type: 'success', currentDirectory };
  } else if (arg.startsWith('~')) {
    path = arg;
  } else {
    path = currentDirectory + '/' + arg;
  }
  const res = parsePath(path);
  if (res.type === 'file') {
    errorMsg = `cd: ${arg}: Not a directory`;
    return { type: 'error', errorMsg };
  } else if (res.type === 'dirctory') {
    currentDirectory = res.path;
    return { type: 'success', currentDirectory };
  }
  return { type: 'error', errorMsg };
}
