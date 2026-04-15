import ls from './ls';

export default function handleCommand(inputString: string, currentDirectory: string) {
  const command = inputString.split(' ')[0];
  console.log({ inputString, command });
  let result = '';
  if (command === 'ls') {
    result = ls(inputString.split(' ')[1], currentDirectory);
  } else if (!inputString.trim()) {
    result = '';
  } else {
    result = `${command}: command not found`;
  }
  return { result, currentDirectory };
}
