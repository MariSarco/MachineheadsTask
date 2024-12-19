import { Flex } from "antd";
import Title from "../Title/Title";
import PageName from "../../../shared/PageName/PageName";
import styles from './Page.module.scss';

type TPageProps = {
  form: JSX.Element;
  title: string;
  visibleBackBlockMode: boolean;
};
const Page = ({ form, title }: TPageProps) => {
  return (
    <Flex justify="center" align="center" className={styles.pageLayout}>
      <PageName pageName="Hello, There" />
      <Flex vertical justify="space-between" gap="large" align="center">
        <Title title={title} />
        {form}
      </Flex>
    </Flex>
  );
};

export default Page;
