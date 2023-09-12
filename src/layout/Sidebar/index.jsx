import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { HomeOutlined, DashboardOutlined, SettingOutlined, AndroidOutlined } from '@ant-design/icons';

import CustomMenu from 'components/Menu';
import { HOME_PATH, DASHBOARD_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH } from 'constants/route';

import './index.scss';

const { Sider } = Layout;

export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const sidebarMenu = [
    {
      label: 'Home',
      key: HOME_PATH,
      icon: <HomeOutlined />
    },
    {
      label: 'Dashboard',
      key: DASHBOARD_PATH,
      icon: <DashboardOutlined />,
      submenu: [
        {
          label: 'Submenu 1',
          key: 'submenu1-path',
          icon: <DashboardOutlined />,
          submenu: [
            {
              label: 'Sub-submenu 1',
              key: '/Sub-submenu-1',
              icon: <SettingOutlined />,
              submenu: [{ label: 'Submenu 1', key: '/submenu1-path', icon: <DashboardOutlined /> }]
            },
            {
              label: 'Sub-submenu 2',
              key: '/Sub-submenu-2',
              icon: <HomeOutlined />
            },
            {
              label: 'Sub-submenu 3',
              key: '/Sub-submenu-3',
              icon: <SettingOutlined />
            }
            // ... add more nested submenus as needed
          ]
        },
        {
          label: 'Sub-submenu 4',
          key: '/Sub-submenu-4',
          icon: <SettingOutlined />
        }
        // ... add more submenus as needed
      ]
    },
    {
      label: 'Settings',
      key: SETTINGS_PATH,
      icon: <SettingOutlined />
    },
    {
      label: 'Kitchen Sink',
      key: KITCHEN_SINK_PATH,
      icon: <AndroidOutlined />
    }
  ];

  useEffect(() => {
    setCurrentMenu(location.pathname);
  }, [location]);

  const handleSidebarMenu = item => {
    navigate(item.key);
    setCurrentMenu(item.key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className="sidebar"
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={collapsed => setCollapsed(collapsed)}
    >
      <div className="hv-100">
        <CustomMenu
          collapsed={collapsed}
          selectedKeys={[currentMenu]}
          menuItems={sidebarMenu}
          onClick={handleSidebarMenu}
        />
      </div>
    </Sider>
  );
}
