import { FILE_TREE } from '@/constants/file-tree';
import type { DirectoryContent } from '@/types/file-tree';

type Res =
  | {
      type: 'dirctory';
      childDirs: string[];
      path: string;
    }
  | {
      type: 'file';
      name: string;
      content: string;
    }
  | {
      type: 'error';
    };

export default function parsePath(path: string): Res {
  let pathArray: string[] = [];
  if (path === '~') {
    pathArray = ['~'];
  } else {
    pathArray = path.split('/');
  }

  // pathArrayの要素の''と'.'をなくす
  pathArray = pathArray.filter((e) => e !== '' && e !== '.');

  // '..'をなくす
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

  let childDirs: DirectoryContent[] = [];
  let inode = 5; // root
  for (let path_i = 0; path_i < pathArray.length; path_i++) {
    if (path_i === 0) {
      // 初回はrootのchildDirsを取得
      for (const node of FILE_TREE) {
        if (inode === node.inode) {
          if (node.type === 'directory') {
            childDirs = node.content;
            break;
          }
        }
      }
      continue;
    }

    for (const childDir of childDirs) {
      if (pathArray[path_i] === childDir.name) {
        inode = childDir.inode;
        break;
      } else if (childDirs[childDirs.length - 1] === childDir) {
        // 最後までなかった時
        return { type: 'error' };
      }
    }

    for (const node of FILE_TREE) {
      if (node.inode === inode) {
        if (node.type === 'directory') {
          childDirs = node.content;
          break;
        } else if (node.type === 'file' && path_i === pathArray.length - 1) {
          // 最後でファイルのとき
          return { type: 'file', name: node.name, content: node.content };
        } else {
          // ファイルなのに最後じゃないとき
          return { type: 'error' };
        }
      }
    }
  }
  const resChildDirs = childDirs.map((dir) => dir.name);
  return { type: 'dirctory', childDirs: resChildDirs, path: pathArray.join('/') };
}
