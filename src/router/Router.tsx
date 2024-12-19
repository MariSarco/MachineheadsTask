import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from '../components/App/App';
import Home from '../components/Home/Home.tsx';
import AlreadyAuth from '../hocs/AlreadyAuth.tsx';
import RequireAuth from '../hocs/RequireAuth.tsx';
import { LazyLoginPage } from '../pages/LoginPage/LazyLoginPage.async.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AlreadyAuth />}>
        <Route path='login' element={<App />}>
          <Route index element={<LazyLoginPage />} />
        </Route>
      </Route>
      <Route element={<RequireAuth />}>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Route>,
  ),
);
