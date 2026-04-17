import parsePath from './parsePath';

export default function ls(arg: string, currentDirectory: string): string {
  let path = '';
  if (arg.startsWith('~')) {
    path = arg;
  } else if (arg) {
    path = currentDirectory + '/' + arg;
  } else {
    path = currentDirectory;
  }
  const res = parsePath(path);
  if (res.type === 'file') {
    return res.name;
  } else if (res.type === 'dirctory') {
    return res.childDirs.join(' ');
  }
  return `ls: cannot access '${arg}': No such file or directory`;
}
