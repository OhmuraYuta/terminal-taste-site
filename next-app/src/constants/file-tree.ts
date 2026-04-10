import type { File } from '@/types/file-tree';

const FileTree: File[] = [
  {
    fileType: 'directory',
    name: 'kwus',
    description: 'SEOの対策ツール',
    parent: '~',
  },
  {
    fileType: 'directory',
    name: 'youtube-downloader',
    description: 'YouTubeダウンローダー',
    parent: '~',
  },
] as const;
