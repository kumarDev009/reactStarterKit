import { useState } from 'react';

import { Layout } from 'antd';

import Menu from 'components/Menu';
import { sidebarMenu } from 'constants/Menu';

import './index.scss';

const { Sider: AntdSider } = Layout;

export default function CustomSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <AntdSider
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      className="sider"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={setCollapsed}
    >
      <Menu menuItems={sidebarMenu} collapsed={collapsed} />
    </AntdSider>
  );
}
