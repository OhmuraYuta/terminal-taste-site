import { useState, useEffect } from 'react';
import handleCommand from '@/lib/handleCommand';
import type { History } from '@/types/history';

export default function useUserInput() {
  const [inputString, setInputString] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [history, setHistory] = useState<History>([]);
  const [currentDirectory, setCurrentDirectory] = useState<string>('~');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      // 特殊キーは二文字以上であることを使って排除
      if (key.length === 1) {
        setInputString((prev) => {
          const firstSegment = prev.substring(0, currentIndex);
          const secondSegment = prev.substring(currentIndex, prev.length);
          return firstSegment + key + secondSegment;
        });
        setCurrentIndex((prev) => prev + 1);
      } else if (key === 'Backspace') {
        setInputString((prev) => {
          const firstSegment = prev.substring(0, currentIndex - 1);
          const secondSegment = prev.substring(currentIndex, prev.length);
          return firstSegment + secondSegment;
        });
        setCurrentIndex((prev) => {
          if (prev >= 1) {
            return prev - 1;
          } else {
            return 0;
          }
        });
      } else if (key === 'ArrowLeft') {
        setCurrentIndex((prev) => {
          if (prev >= 1) {
            return prev - 1;
          } else {
            return 0;
          }
        });
      } else if (key === 'ArrowRight') {
        setCurrentIndex((prev) => {
          if (prev < inputString.length) {
            return prev + 1;
          } else {
            return inputString.length;
          }
        });
      } else if (key === 'Enter') {
        const response = handleCommand(inputString, currentDirectory);
        setCurrentDirectory(response.currentDirectory);
        setHistory((prev) => {
          return [
            ...prev,
            {
              type: response.type,
              currentDirectory,
              userInput: inputString,
              result: response.result,
            },
          ];
        });
        // 初期化
        setInputString('');
        setCurrentIndex(0);
      }

      // 矢印及びスペースでの画面移動を無効化
      const preventedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Tab'];
      if (preventedKeys.includes(key)) {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputString, currentIndex, currentDirectory]);
  return { inputString, currentIndex, history, currentDirectory };
}
