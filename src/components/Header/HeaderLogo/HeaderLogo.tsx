import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div className={styles.container}>
      <h1>
        Machineheads <span>TestTask</span>
      </h1>
    </div>
  );
};

export default HeaderLogo;
