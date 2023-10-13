import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import Menu from 'components/Menu';
import { getSidebarMenu } from 'constants/header';
import './index.scss';

const { Sider: AntdSider } = Layout;

export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const { t } = useTranslation();

  const sidebarMenu = getSidebarMenu(t);

  useEffect(() => {
    setCurrentMenu([location.pathname]);
  }, [location]);

  const handleSidebarMenu = item => {
    navigate(item.key);
    setCurrentMenu([item.key]);
  };

  return (
    <AntdSider
      collapsible
      collapsed={collapsed}
      className="sidebar"
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={setCollapsed}
    >
      <Menu
        collapsed={collapsed}
        selectedKeys={currentMenu}
        menuItems={sidebarMenu}
        onClick={handleSidebarMenu}
        menuPlacement="right"
      />
    </AntdSider>
  );
}
