import ls from './ls';
import cd from './cd';

export default function handleCommand(inputString: string, currentDirectory: string) {
  const command = inputString.split(' ')[0];
  console.log({ inputString, command });
  let result = '';
  if (command === 'ls') {
    result = ls(inputString.split(' ')[1], currentDirectory);
  } else if (command === 'cd') {
    const res = cd(inputString.split(' ')[1], currentDirectory);
    if (res.type === 'success') {
      currentDirectory = res.currentDirectory;
    } else {
      result = res.errorMsg;
    }
  } else if (!inputString.trim()) {
    result = '';
  } else {
    result = `${command}: command not found`;
  }
  return { result, currentDirectory };
}
