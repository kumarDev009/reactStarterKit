import { Suspense, lazy } from 'react';
import { Layout, Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import { DASHBOARD_PATH, HOME_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH } from 'constants/route';
import ErrorBoundary from 'components/ErrorBoundary';
import NotFound from 'pages/NotFound';

const { Content } = Layout;

export default function CustomContent() {
  const routeSources = [
    {
      path: HOME_PATH,
      component: lazy(() => import('pages/Home'))
    },
    {
      path: DASHBOARD_PATH,
      component: lazy(() => import('pages/Dashboard'))
    },
    {
      path: SETTINGS_PATH,
      component: lazy(() => import('pages/Settings'))
    },
    {
      path: KITCHEN_SINK_PATH,
      component: lazy(() => import('pages/KitchenSink'))
    }
  ];

  return (
    <ErrorBoundary>
      {/* TODO: Need to update this fallback component with our blockUI component once its ready. */}
      <Suspense fallback={<div className="d-flex justify-content-center mt-5">{<Spin />}</div>}>
        <Content style={{ margin: '24px 16px 0' }}>
          <Routes>
            {routeSources.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={'*'} element={<NotFound />} />
          </Routes>
        </Content>
      </Suspense>
    </ErrorBoundary>
  );
}
