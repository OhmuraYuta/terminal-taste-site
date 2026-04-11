import useUserInput from '@/hooks/useUserInput';

export default function Result() {
  const { result } = useUserInput();
  return <div>{result}</div>;
}
