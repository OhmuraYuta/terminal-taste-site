export type FileType = 'file' | 'directory' | 'link';
export type File = {
  fileType: FileType;
  name: string;
  description?: string;
  parent: string;
};
