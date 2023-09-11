import { Suspense, lazy } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import { DASHBOARD_PATH, HOME_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH, WILD_CARD_PATH } from 'constants/route';
import ErrorBoundary from 'components/ErrorBoundary';
import Content from 'components/Content';
import NotFound from 'pages/NotFound';

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
      <Suspense fallback={<div className="d-flex justify-content-center mt-3">{<Spin />}</div>}>
        <Content style={{ margin: '24px 16px 0' }}>
          <Routes>
            {routeSources.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path={WILD_CARD_PATH} element={<NotFound />} />
          </Routes>
        </Content>
      </Suspense>
    </ErrorBoundary>
  );
}
