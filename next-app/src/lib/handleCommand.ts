export default function handleCommand(inputString: string) {
  const command = inputString.split(' ')[0];
  const result = `${command}: command not found`;
  return result;
}
