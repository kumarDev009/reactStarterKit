import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';

import PrivateRoute from 'routers/PrivateRoute';
import PublicRoute from 'routers/PublicRoute';
import { HOME_PATH, INDEX_PATH, LOGIN_PATH } from 'constants/route';

const Login = lazy(() => import('pages/Login'));
const Layout = lazy(() => import('layout'));

const Routers = () => {
  return (
    // Todo: Need to update this fallback component with our blockUI component once its ready.
    <Suspense fallback={<div className="d-flex justify-content-center mt-5">{<Spin />}</div>}>
      <Routes>
        <Route path={LOGIN_PATH} element={<PublicRoute component={<Login />} redirectedUrl={HOME_PATH} />} />
        <Route path={INDEX_PATH} element={<PrivateRoute component={<Layout />} redirectedUrl={LOGIN_PATH} />} />
        <Route path="*" element={<div className="d-flex justify-content-center mt-5">No Page Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
