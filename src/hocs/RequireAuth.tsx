import { Navigate, Outlet } from "react-router-dom";
import useLogin from "../components/hooks/useAuth";

const RequireAuth = () => {
  const { isLogin } = useLogin();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
