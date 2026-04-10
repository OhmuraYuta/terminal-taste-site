import { useState, useEffect } from 'react';

export default function useCatchKey() {
  const [lastKeys, setLastKeys] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      // 特殊キーは二文字以上であることを使って排除
      if (key.length === 1 || key === 'Tab' || key === 'Backspace') {
        setLastKeys(key);
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

  return lastKeys;
}
