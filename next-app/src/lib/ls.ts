import { FILE_TREE } from '@/constants/file-tree';
import type { DirectoryContent } from '@/types/file-tree';

type ChildDirs = DirectoryContent[] | string;

export default function ls(arg: string, currentDirectory: string): string {
  let path = '';
  if (arg) {
    path = currentDirectory + '/' + arg;
  } else {
    path = currentDirectory;
  }
  const info = getInfoFromPath(path);
  if (info?.fileName) {
    return info.fileName;
  } else if (Array.isArray(info?.childDirs)) {
    const result = info.childDirs.map((dir) => {
      return dir.name;
    });
    return result.join(' ');
  }
  return `ls: cannot access '${arg}': No such file or directory`;
}

function getInfoFromPath(path: string) {
  if (path === '~') {
    path += '/';
  }
  const pathArray = path.split('/');
  if (pathArray[pathArray.length - 1] === '') {
    pathArray.splice(pathArray.length - 1, 1);
  }
  // . と .. を処理
  for (let i = pathArray.length - 1; i >= 0; i--) {
    if (pathArray[i] === '.') {
      pathArray.splice(i, 1);
    }
  }
  let dotDotIndex = pathArray.indexOf('..');
  while (dotDotIndex !== -1) {
    if (dotDotIndex === 1) {
      // rootの親はない
      pathArray.splice(dotDotIndex, 1);
    } else {
      pathArray.splice(dotDotIndex - 1, 2);
    }
    dotDotIndex = pathArray.indexOf('..');
  }

  // rootのinode
  let inode = 5;
  let childDirs: ChildDirs = [];
  let fileName = '';
  for (let i = 0; i < pathArray.length; i++) {
    // 初回はrootのcontent取得
    if (i === 0 && Array.isArray(FILE_TREE[0].content)) {
      childDirs = FILE_TREE[0].content;
      continue;
    }
    if (!Array.isArray(childDirs)) {
      return;
    }
    for (let child_i = 0; child_i < childDirs.length; child_i++) {
      if (childDirs[child_i].name === pathArray[i]) {
        inode = childDirs[child_i].inode;
        for (const dir of FILE_TREE) {
          if (dir.inode === inode && Array.isArray(dir.content)) {
            childDirs = dir.content;
            break;
          } else if (dir.inode === inode && typeof dir.content === 'string') {
            fileName = dir.name;
            childDirs = [];
            break;
          }
        }
        break;
      } else if (child_i === childDirs.length - 1) {
        // 途中でbreakせず最後まで来たとき
        return { error: 'error' };
      }
    }
  }
  return { inode, childDirs, fileName };
}
