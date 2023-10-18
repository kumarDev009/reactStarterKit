import { useState } from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import SidebarMenu from 'components/SidebarMenu';
import { getSidebarMenu } from 'constants/Menu';

import './index.scss';

const { Sider: AntdSider } = Layout;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const sidebarMenu = getSidebarMenu(t);

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
      <SidebarMenu menuItems={sidebarMenu} collapsed={collapsed} />
    </AntdSider>
  );
}
