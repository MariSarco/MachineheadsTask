import { Button } from "antd";
import { loginActions } from "../../redux/slices/login/login.slice";
import { useAppDispatch } from "../hooks/reduxHooks";
import styles from "./Header.module.scss";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = ({ isLogin }: { isLogin: boolean }) => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(loginActions.logout());
  };

  return (
    <header className={styles.header}>
      <HeaderLogo />
      {isLogin && (
        <div className={styles.isLogin_block}>
          <span>Administrator</span>
          <Button color="default" variant="solid" onClick={handleLogout}>
            LogOut
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
