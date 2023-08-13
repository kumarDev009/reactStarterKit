import { Suspense, lazy } from 'react';
import { Layout, Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import { DASHBOARD_PATH, HOME_PATH, SETTINGS_PATH } from '../../../constants/route';

const { Content } = Layout;

export default function CustomContent() {

    const routeSources = [
        {
            path: HOME_PATH,
            component: lazy(() => import('../../home/index')),
        },
        {
            path: DASHBOARD_PATH,
            component: lazy(() => import('../../dashboard'))
        },

        {
            path: SETTINGS_PATH,
            component: lazy(() => import('../../settings'))
        }
    ];


    return (
        // Todo: Need to update this fallback component with our blockUI component once its ready.
        <Suspense fallback={<div className='d-flex justify-content-center mt-5'>{<Spin />}</div>}>
            <Content style={{ margin: '24px 16px 0' }}>
                <Routes>
                    {routeSources.map(({ path, component: Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path={'*'} element={<div>No path found!!</div>} />
                </Routes>
            </Content>
        </Suspense>
    )
}
