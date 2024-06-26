import { Suspense, lazy, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import PrivateRoute from 'routers/PrivateRoute';
import PublicRoute from 'routers/PublicRoute';
import {
  DASHBOARD_PATH,
  HOME_PATH,
  INDEX_PATH,
  LOGIN_PATH,
  SIGNUP_PATH,
  FORGOT_PASSWORD_PATH,
  WILD_CARD_PATH
} from 'constants/route';
import NotFound from 'pages/NotFound';
import { ThemeContext } from 'context/themeContext';

const Login = lazy(() => import('pages/Login'));
const SignUp = lazy(() => import('pages/SignUp'));
const ForgotPassword = lazy(() => import('pages/ForgotPassword'));
const Layout = lazy(() => import('layout'));

const Routers = () => {
  const { notificationContextHolder } = useContext(ThemeContext);
  return (
    // Todo: Need to update this fallback component with our blockUI component once its ready.
    <div>
      <Suspense fallback={<div className="d-flex justify-content-center mt-3">{<Spin />}</div>}>
        <Routes>
          <Route
            path={FORGOT_PASSWORD_PATH}
            element={<PublicRoute component={<ForgotPassword />} redirectedUrl={HOME_PATH} />}
          />
          <Route path={INDEX_PATH} element={<PrivateRoute component={<Layout />} redirectUrl={LOGIN_PATH} />} />
          <Route path={LOGIN_PATH} element={<PublicRoute component={<Login />} redirectUrl={DASHBOARD_PATH} />} />
          <Route path={SIGNUP_PATH} element={<PublicRoute component={<SignUp />} redirectUrl={LOGIN_PATH} />} />
          <Route path={WILD_CARD_PATH} element={<NotFound />} />
        </Routes>
      </Suspense>
      {notificationContextHolder}
    </div>
  );
};

export default Routers;
