import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import SidebarMenu from 'components/SidebarMenu';
import { getSidebarMenu } from 'constants/Menu';

import './index.scss';

const { Sider: AntdSider } = Layout;

export default function Sidebar() {
  const { t } = useTranslation();

  const sidebarMenu = getSidebarMenu(t);

  return (
    <AntdSider
      collapsible
      breakpoint="lg"
      className="sider"
      collapsedWidth="80"
      onBreakpoint={broken => {
        console.log(broken);
      }}
    >
      <SidebarMenu menuItems={sidebarMenu} />
    </AntdSider>
  );
}
