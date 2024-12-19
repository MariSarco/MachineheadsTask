import { Flex } from 'antd';
import styles from './Title.module.scss';

type TTitleProps = {
  title: string;
};

const Title = ({ title }: TTitleProps) => {
  return (
    <Flex vertical align='center' className={styles.title_container}>
      <h1 className={styles.title}>{title}</h1>
    </Flex>
  );
};

export default Title;
