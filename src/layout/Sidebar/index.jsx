import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';

import CustomMenu from 'components/Menu';
import { sidebarMenu } from 'constants/Menu';
import './index.scss';

const { Sider: AntdSider } = Layout;

export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentMenu, setCurrentMenu] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="menuWrapper position-fixed">
        <CustomMenu
          collapsed={collapsed}
          selectedKeys={currentMenu}
          menuItems={sidebarMenu}
          onClick={handleSidebarMenu}
          menuPlacement="right"
        />
      </div>
    </AntdSider>
  );
}
