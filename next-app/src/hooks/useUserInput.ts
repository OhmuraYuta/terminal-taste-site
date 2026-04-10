import { useState, useEffect } from 'react';

export default function useUserInput() {
  const [lastKeys, setLastKeys] = useState<string>('');
  const [inputString, setInputString] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      // 特殊キーは二文字以上であることを使って排除
      if (key.length === 1 || key === 'Tab' || key === 'Enter') {
        setLastKeys(key);
        setInputString((prev) => {
          return prev + key;
        });
        setCurrentIndex((prev) => prev + 1);
      } else if (key === 'Backspace') {
        setInputString((prev) => {
          return prev.substring(0, prev.length - 1);
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
        console.log({ inputString });
        setCurrentIndex((prev) => {
          if (prev < inputString.length) {
            return prev + 1;
          } else {
            return inputString.length;
          }
        });
      }

      // 矢印及びスペースでの画面移動を無効化
      const preventedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Tab'];
      if (preventedKeys.includes(key)) {
        event.preventDefault();
      }

      console.log(`Key pressed: ${key}`);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputString]);
  console.log({ inputString });
  return { inputString, currentIndex };
}
