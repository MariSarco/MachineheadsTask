import AuthForm from "../../components/Login/LoginForm/LoginForm";
import Page from "../../components/Login/Page/Page";

const title = "Welcome";

const LoginPage = () => {
  return (
    <Page form={<AuthForm />} title={title} visibleBackBlockMode={false} />
  );
};

export default LoginPage;
