import { Form, Input as AntdInput, InputProps, FormItemProps } from 'antd';
import { Control, useController } from 'react-hook-form';
import styles from './Input.module.scss';

type TInputProps = {
  control: Control;
  name: string;
  rulesForController?: object;
  defaultValue?: string;
  inputType?: string;
  visibleHelp?: boolean;
} & InputProps &
  FormItemProps;

const Input = (props: TInputProps) => {
  const {
    control,
    name,
    rulesForController,
    defaultValue,
    inputType,
    visibleHelp = true,
    ...otherProps
  } = props;
  const {
    field: { onChange, value, name: fieldName, ref },
    fieldState: { error, isDirty },
  } = useController({ control, name, rules: rulesForController, defaultValue });

  const validateStatus = isDirty ? (error?.message ? 'error' : 'success') : '';
  const TypedInput = inputType === 'password' ? AntdInput.Password : AntdInput;

  return (
    <Form.Item
      validateStatus={validateStatus}
      help={visibleHelp && error?.message}
      className={styles.input_container}
      label={otherProps.label}
      labelCol={{ span: 24 }}
    >
      <TypedInput
        className={styles.input}
        name={fieldName}
        onChange={onChange}
        value={value}
        ref={ref}
        {...otherProps}
      />
    </Form.Item>
  );
};

export default Input;
