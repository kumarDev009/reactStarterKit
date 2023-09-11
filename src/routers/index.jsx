import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import PrivateRoute from 'routers/PrivateRoute';
import PublicRoute from 'routers/PublicRoute';
import { HOME_PATH, INDEX_PATH, LOGIN_PATH, WILD_CARD_PATH } from 'constants/route';
import NotFound from 'pages/NotFound';

const Login = lazy(() => import('pages/Login'));
const Layout = lazy(() => import('layout'));

const Routers = () => {
  return (
    // Todo: Need to update this fallback component with our blockUI component once its ready.
    <Suspense fallback={<div className="d-flex justify-content-center mt-3">{<Spin />}</div>}>
      <Routes>
        <Route path={LOGIN_PATH} element={<PublicRoute component={<Login />} redirectedUrl={HOME_PATH} />} />
        <Route path={INDEX_PATH} element={<PrivateRoute component={<Layout />} redirectedUrl={LOGIN_PATH} />} />
        <Route path={WILD_CARD_PATH} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
