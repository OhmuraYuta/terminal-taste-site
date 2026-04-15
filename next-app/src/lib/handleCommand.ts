import ls from './ls';

export default function handleCommand(inputString: string, currentDirectory: string) {
  const command = inputString.split(' ')[0];
  const arg = inputString.split(' ')[1];
  console.log({ inputString, command });
  let result = '';
  if (command === 'ls') {
    result = ls(inputString.split(' ')[1], currentDirectory);
  } else {
    result = `${command}: command not found`;
  }
  return { result, currentDirectory };
}
