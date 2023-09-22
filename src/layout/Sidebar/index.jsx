import { useState, useContext } from 'react';

import { Layout } from 'antd';

import Menu from 'components/Menu';
import { sidebarMenu } from 'constants/Menu';

import './index.scss';
import { ThemeContext } from 'context/themeContext';

const { Sider: AntdSider } = Layout;

export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <AntdSider
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={setCollapsed}
      // Todo: Need to fix this in a different way.
      className={isDarkMode === 'dark' ? 'ant-layout-sider-dark' : 'ant-layout-sider-light'}
    >
      <Menu menuItems={sidebarMenu} collapsed={collapsed} />
    </AntdSider>
  );
}
