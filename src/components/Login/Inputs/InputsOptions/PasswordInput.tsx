import { TInputOption } from './types';
import { useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import Input from '../Input';

type TPasswordInputProps = {
  name?: string;
  placeholder?: string;
} & TInputOption;

const PasswordInput = ({
  control,
  label,
  name = '',
  placeholder,
  visibleHelp,
}: TPasswordInputProps) => {
  const [isCapsLock, setIsCapsLock] = useState(false);

  function handlePasswordKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    setIsCapsLock(event.getModifierState('CapsLock'));
  }

  function handleOnBlur() {
    setIsCapsLock(false);
  }

  return (
    <Input
      inputType='password'
      control={control}
      name={name}
      placeholder={placeholder}
      allowClear={true}
      defaultValue=''
      label={label}
      visibleHelp={visibleHelp}
      onBlur={handleOnBlur}
      onKeyDown={handlePasswordKeyPress}
      aria-label='password'
      role='password'
      prefix={isCapsLock && <ArrowUpOutlined />}
      rulesForController={{
        require: true,
      }}
    />
  );
};

export default PasswordInput;
