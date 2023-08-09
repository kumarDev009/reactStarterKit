import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';

import { DASHBOARD_PATH, HOME_PATH, SETTINGS_PATH } from '../../../constants/route';
import Dashboard from '../../dashboard/index';
import { Home } from '../../home';
import Settings from '../../settings/index';
const { Content } = Layout;

export default function CustomContent() {

    const routeSources = [
        {
            path: HOME_PATH,
            component: <Home />,
        },
        {
            path: DASHBOARD_PATH,
            component: <Dashboard />
        },

        {
            path: SETTINGS_PATH,
            component: <Settings />
        }
    ];


    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
                {routeSources.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={Component} />
                ))}
                <Route path={'*'} element={<div>No path found!!</div>} />
            </Routes>
        </Content>
    )
}
