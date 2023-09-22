import { HOME_PATH, DASHBOARD_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH } from 'constants/route';
import { HomeOutlined, DashboardOutlined, SettingOutlined, AndroidOutlined, LogoutOutlined } from '@ant-design/icons';

export const sidebarMenu = [
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
          // ... We can add more submenu menu here
        ]
      },
      {
        label: 'Sub-submenu 4',
        key: '/Sub-submenu-4',
        icon: <SettingOutlined />
      }
      // ... We can add more submenu menu here
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

export const menuArr = [
  {
    label: 'Logout',
    icon: LogoutOutlined
  }
];
