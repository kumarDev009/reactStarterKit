import { Menu as AntdMenu } from 'antd';

export default function CustomMenu({
  menuItems = [],
  mode = 'inline',
  theme = 'dark',
  selectedKeys = [],
  collapsed = false,
  onClick = () => {},
  ...rest
}) {
  const renderMenuItems = items => {
    return items.map(item => {
      if (item.submenu && item.submenu.length) {
        return (
          <AntdMenu.SubMenu key={item.key} title={item.label} icon={item.icon}>
            {renderMenuItems(item.submenu)}
          </AntdMenu.SubMenu>
        );
      }
      return (
        <AntdMenu.Item key={item.key} icon={item.icon} onClick={() => onClick(item)}>
          {item.label}
        </AntdMenu.Item>
      );
    });
  };

  return (
    <AntdMenu selectedKeys={selectedKeys} theme={theme} mode={mode} {...rest}>
      {renderMenuItems(menuItems)}
    </AntdMenu>
  );
}
