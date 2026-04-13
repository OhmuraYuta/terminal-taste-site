import type { FileTree } from '@/types/file-tree';

export const FILE_TREE: FileTree = [
  // 先頭は必ずrootにする
  {
    name: '~',
    inode: 5,
    content: [
      {
        name: 'sumi',
        inode: 0,
      },
      {
        name: 'nose',
        inode: 3,
      },
    ],
  },
  {
    name: 'sumi',
    inode: 0,
    content: [
      {
        name: 'nazu',
        inode: 1,
      },
      {
        name: 'toto',
        inode: 2,
      },
    ],
  },
  {
    name: 'nose',
    inode: 3,
    content: [
      {
        name: 'noah',
        inode: 4,
      },
    ],
  },
];
