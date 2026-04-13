export default function handleCommand(inputString: string, currentDirectory: string) {
  const command = inputString.split(' ')[0];
  const result = `${command}: command not found`;
  return { result, currentDirectory };
}
