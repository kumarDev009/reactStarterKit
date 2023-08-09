import React, { Suspense } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Spin } from 'antd';

import { PrivateRoute } from './services/router/privateRoute';
import { PublicRoute } from './services/router/publicRoute';
import { HOME_PATH, INDEX_PATH, LOGIN_PATH } from './constants/route';

const Login = React.lazy(() => import('./pages/login'));
const Layout = React.lazy(() => import('./pages/layout'));

function App() {
  return (
    <div>
      <Suspense fallback={<div className='d-flex justify-content-center mt-5'>{<Spin />}</div>}>
        <Routes>
          <Route
            path={LOGIN_PATH}
            element={
              <PublicRoute
                component={<Login />}
                redirectedUrl={HOME_PATH}
              />
            }
          />
          <Route
            path={INDEX_PATH}
            element={
              <PrivateRoute
                component={<Layout />}
                redirectedUrl={LOGIN_PATH}
              />
            }
          />
          <Route
            path="*"
            element={
              <div className='d-flex justify-content-center mt-5'>
                No Page Found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;