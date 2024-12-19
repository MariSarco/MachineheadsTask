import styles from "./PageName.module.scss";

interface IPageName {
  pageName: string;
}

const PageName = ({ pageName }: IPageName) => {
  return (
    <div className={styles.container}>
      <h1>{pageName}</h1>
    </div>
  );
};

export default PageName;
