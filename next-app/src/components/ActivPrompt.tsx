'use client';
import Prompt from './Prompt';
import Result from './Result';
import UserInput from './UserInput';

export default function ActivPrompt() {
  return (
    <div>
      <Prompt currentDirectory="~" />
      <UserInput />
      <Result />
    </div>
  );
}
