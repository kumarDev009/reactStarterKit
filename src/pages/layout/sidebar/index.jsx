import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { HomeOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

import { HOME_PATH, DASHBOARD_PATH, SETTINGS_PATH } from '../../../constants/route';
import CustomMenu from '../../../Components/FormFields/CustomMenu';

const { Sider } = Layout;

export default function CustomSidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const [currentMenu, setCurrentMenu] = useState('');

    const sidebarMenu = [
        {
            label: "Home", key: HOME_PATH, icon: <HomeOutlined />
        },
        {
            label: "Dashboard", key: DASHBOARD_PATH, icon: <DashboardOutlined />
        },
        {
            label: "Settings", key: SETTINGS_PATH, icon: <SettingOutlined />
        },
    ]

    useEffect(() => {
        setCurrentMenu(location.pathname)
    }, [location])


    const handleSidebarMenu = (item) => {
        navigate(item.key)
        setCurrentMenu(item.key)
    }

    return (
        <Sider
            className='sidebar'
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="home-screen-logo">
                <img
                    src="/assets/images/logo.png"
                    alt="mainlogo"
                />
            </div>
            <div className='mt-3'>
                <CustomMenu selectedKeys={[currentMenu]} menuItems={sidebarMenu} onClick={handleSidebarMenu} />
            </div>
        </Sider>
    )
}
