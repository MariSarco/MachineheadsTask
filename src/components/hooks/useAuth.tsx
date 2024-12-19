import { useAppSelector } from './reduxHooks';

function useLogin() {
  const loginState = useAppSelector((state) => state.login);
  return loginState;
}

export default useLogin;
