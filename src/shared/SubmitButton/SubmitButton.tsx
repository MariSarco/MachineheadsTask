import { RightCircleOutlined } from '@ant-design/icons';
import { Button, ButtonProps } from 'antd';
import styles from './SubmitButton.module.scss';

type TSubmitButton = {
  text: string;
} & ButtonProps;

const SubmitButton = ({ disabled, text, ...otherProps }: TSubmitButton) => {
  return (
    <Button
      type='primary'
      htmlType='submit'
      size='large'
      className={styles.btn}
      disabled={!disabled}
      {...otherProps}
    >
      {text}
      <RightCircleOutlined />
    </Button>
  );
};

export default SubmitButton;
