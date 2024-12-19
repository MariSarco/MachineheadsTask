import { TInputOption } from './types';
import Input from '../Input';
import validateEmailForAuth from '../../../../helpers/validation/validateEmail/validateEmailAuth';

const EmailInput = ({ control, label }: TInputOption) => {
  return (
    <Input
      control={control}
      name='email'
      placeholder='Email'
      allowClear={true}
      defaultValue=''
      label={label}
      aria-label='email'
      rulesForController={{
        require: true,
        validate: {
          isEmail: validateEmailForAuth,
        },
      }}
    />
  );
};

export default EmailInput;
