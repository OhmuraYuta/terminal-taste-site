import React from 'react';

export type FileType = 'file' | 'directory' | 'link';

export type DirectoryContent = {
  name: string;
  inode: number;
};

export type Directory = {
  name: string;
  inode: number;
  content: DirectoryContent[];
};

export type File = {
  name: string;
  inode: number;
  content: React.ReactElement;
};

export type FileTree = (Directory | File)[];
