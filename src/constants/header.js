import { HOME_PATH, DASHBOARD_PATH, SETTINGS_PATH, KITCHEN_SINK_PATH } from 'constants/route';

import { HomeOutlined, DashboardOutlined, SettingOutlined, AndroidOutlined, LoginOutlined } from '@ant-design/icons';

export const getSidebarMenu = t => [
  {
    label: t('pages.home'),
    key: HOME_PATH,
    icon: <HomeOutlined />
  },
  {
    label: t('pages.dashboard'),
    key: DASHBOARD_PATH,
    icon: <DashboardOutlined />,
    submenu: [
      {
        label: t('pages.submenu1'),
        key: 'submenu1-path',
        icon: <DashboardOutlined />,
        submenu: [
          {
            label: t('pages.sub-submenu1'),
            key: '/Sub-submenu-1',
            icon: <SettingOutlined />,
            submenu: [{ label: t('submenu1'), key: '/submenu1-path', icon: <DashboardOutlined /> }]
          },
          {
            label: t('pages.sub-submenu2'),
            key: '/Sub-submenu-2',
            icon: <HomeOutlined />
          },
          {
            label: t('pages.sub-submenu3'),
            key: '/Sub-submenu-3',
            icon: <SettingOutlined />
          }
          // ... We can add more submenu menu here
        ]
      },
      {
        label: t('pages.sub-submenu4'),
        key: '/Sub-submenu-4',
        icon: <SettingOutlined />
      }
      // ... We can add more submenu menu here
    ]
  },
  {
    label: t('pages.settings'),
    key: SETTINGS_PATH,
    icon: <SettingOutlined />
  },
  {
    label: t('pages.kitchenSink'),
    key: KITCHEN_SINK_PATH,
    icon: <AndroidOutlined />
  }
];

export const getMenuArr = t => [
  {
    icon: <SettingOutlined />,
    label: 'Settings',
    path: '/settings'
  },
  {
    icon: <LoginOutlined />,
    label: t('labels.logOut'),
    path: '/logout'
  }
];

export const notifications = [
  {
    title: 'Congratulations, Flora!',
    message: 'Your order has been placed successfully',
    timestamp: 'Just now',
    avatarColor: '#87d068'
  },
  {
    title: 'Reminder for Meeting',
    message: 'Your meeting with Alex starts in 30 minutes',
    timestamp: '15 minutes ago',
    avatarColor: '#ff4d4f'
  }
];
