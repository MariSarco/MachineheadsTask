import useMessage from "antd/es/message/useMessage";
import Header from "../Header/Header.tsx";
import styles from "./App.module.scss";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spin } from "antd";
import useLogin from "../hooks/useAuth.tsx";
import ParticlesLayer from "../../shared/Particles/ParticlesLayer.tsx";

const App = () => {
  const [message, ContextHolder] = useMessage();
  const { isLogin } = useLogin();

  return (
    <>
      <ParticlesLayer />
      <Header isLogin={isLogin} />
      <main className={styles.page}>
        <Suspense fallback={<Spin className={styles.spinner} size="large" />}>
          <Outlet context={message} />
        </Suspense>
      </main>
      {ContextHolder}
    </>
  );
};

export default App;
