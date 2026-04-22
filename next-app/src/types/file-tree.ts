export type FileType = 'file' | 'directory' | 'link';

export type DirectoryContent = {
  type: FileType;
  name: string;
  inode: number;
};

export type Directory = {
  type: 'directory';
  name: string;
  inode: number;
  content: DirectoryContent[];
};

export type File = {
  type: 'file';
  name: string;
  inode: number;
  content: string;
};

export type FileTree = (Directory | File)[];
