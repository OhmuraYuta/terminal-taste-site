'use client';
import Prompt from './Prompt';
import UserInput from './UserInput';

export default function ActivPrompt() {
  return (
    <div>
      <Prompt currentDirectory="~" />
      <UserInput />
    </div>
  );
}
