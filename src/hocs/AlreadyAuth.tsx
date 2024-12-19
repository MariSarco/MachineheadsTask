import { Navigate, Outlet } from 'react-router-dom';
import useLogin from '../components/hooks/useAuth';

const AlreadyAuth = () => {
  const { isLogin } = useLogin();
  return isLogin ? <Navigate to='/' /> : <Outlet />;
};

export default AlreadyAuth;
