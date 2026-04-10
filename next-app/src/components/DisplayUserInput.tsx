import useUserInput from '@/hooks/useUserInput';
import Cursor from './Cursor';

export default function DisplayUserInput() {
  const { inputString, currentIndex } = useUserInput();
  console.log('currentIndex', currentIndex);

  return (
    <span>
      {inputString ? (
        inputString.split('').map((char, index) => (
          <span key={index}>
            <span className="inline-block w-[9.6]">{char}</span>
            {index === currentIndex - 1 && <Cursor />}
          </span>
        ))
      ) : (
        <Cursor />
      )}
    </span>
  );
}
