import useUserInput from '@/hooks/useUserInput';
import Cursor from './Cursor';

export default function UserInput() {
  const { inputString, currentIndex } = useUserInput();
  console.log('currentIndex', currentIndex);

  return (
    <span>
      {currentIndex === 0 && (
        <span className="relative">
          <Cursor />
        </span>
      )}
      {inputString &&
        inputString.split('').map((char, index) => (
          <span key={index} className="relative">
            {index === currentIndex ? (
              <span className="inline-block w-[9.6] text-[#1e1e1e]">{char}</span>
            ) : (
              <span className="inline-block w-[9.6]">{char}</span>
            )}
            {index === currentIndex - 1 && <Cursor />}
          </span>
        ))}
    </span>
  );
}
