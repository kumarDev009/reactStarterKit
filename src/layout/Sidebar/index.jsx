import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { HomeOutlined, DashboardOutlined, SettingOutlined, AndroidOutlined } from '@ant-design/icons';

import CustomMenu from 'components/Menu';
import { HOME_PATH, DASHBOARD_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH } from 'constants/route';
import { ThemeContext } from 'context/themeContext';
import './index.scss';

const { Sider } = Layout;

export default function CustomSidebar() {
  const [currentMenu, setCurrentMenu] = useState('');
  const { isDarkMode } = useContext(ThemeContext);

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
      icon: <DashboardOutlined />
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
      className="sidebar"
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="home-screen-logo">
        <img src="/assets/images/logo.png" alt="mainlogo" />
      </div>
      <div className="mt-3" style={{ height: '100vh' }}>
        <CustomMenu
          selectedKeys={[currentMenu]}
          menuItems={sidebarMenu}
          onClick={handleSidebarMenu}
          theme={isDarkMode ? 'dark' : 'light'}
        />
      </div>
    </Sider>
  );
}
