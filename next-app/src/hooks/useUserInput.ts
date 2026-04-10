import { useState, useEffect } from 'react';

export default function useUserInput() {
  const [lastKeys, setLastKeys] = useState<string>('');
  const [inputString, setInputString] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      // 特殊キーは二文字以上であることを使って排除
      if (
        key.length === 1 ||
        key === 'Tab' ||
        key === 'Backspace' ||
        key === 'ArrowLeft' ||
        key === 'ArrowRight' ||
        key === 'Enter'
      ) {
        setLastKeys(key);
        setInputString((prev) => {
          return prev + key;
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
  }, []);

  return inputString;
}
