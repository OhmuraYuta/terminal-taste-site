import type { FileType } from './file-tree';

export type LsResult = {
  type: FileType;
  name: string;
}[];

export type History = (
  | {
      type: 'normal';
      currentDirectory: string;
      userInput: string;
      result: string;
    }
  | {
      type: 'ls';
      currentDirectory: string;
      userInput: string;
      result: LsResult;
    }
  | {
      type: 'content';
      currentDirectory: string;
      userInput: string;
      result: string;
    }
)[];
