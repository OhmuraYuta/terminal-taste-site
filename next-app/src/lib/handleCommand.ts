import ls from './ls';
import cd from './cd';
import cat from './cat';

export default function handleCommand(inputString: string, currentDirectory: string) {
  const command = inputString.split(' ')[0];
  console.log({ inputString, command });
  let result = '';
  const type = 'normal';
  if (command === 'ls') {
    const res = ls(inputString.split(' ')[1], currentDirectory);
    return { type: res.type, result: res.result, currentDirectory };
  } else if (command === 'cd') {
    const res = cd(inputString.split(' ')[1], currentDirectory);
    if (res.type === 'success') {
      currentDirectory = res.currentDirectory;
    } else {
      result = res.errorMsg;
    }
  } else if (command === 'cat') {
    const res = cat(inputString.split(' ')[1], currentDirectory);
    return { result: res.result, currentDirectory, isContent: res.isContent };
  } else if (!inputString.trim()) {
    result = '';
  } else {
    result = `${command}: command not found`;
  }
  return { result, currentDirectory, type };
}
