import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import { PrivateRoute } from './services/router/privateRoute';
import { PublicRoute } from './services/router/publicRoute';
import { HOME_PATH, INDEX_PATH, LOGIN_PATH } from './constants';
import Layout from './pages/layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path={LOGIN_PATH} element={<PublicRoute component={<Login />} redirectedUrl={HOME_PATH} />} />
        <Route path={INDEX_PATH} element={<PrivateRoute component={<Layout />} redirectedUrl={LOGIN_PATH} />} />
        <Route path="*" element={<div className="d-flex justify-content-center mt-5">No Page Found</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
