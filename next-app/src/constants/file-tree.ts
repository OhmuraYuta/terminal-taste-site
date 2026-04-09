import type { File } from '@/types/file-tree';

const FileTree: File[] = [
  {
    fileType: 'directory',
    name: 'kwus',
    description: 'SEOの対策ツール',
    parent: 'root',
  },
  {
    fileType: 'directory',
    name: 'youtube-downloader',
    description: 'YouTubeダウンローダー',
    parent: 'root',
  },
] as const;
