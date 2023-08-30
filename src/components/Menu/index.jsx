import { Menu as AntdMenu, Tooltip } from 'antd';

export default function CustomMenu({
  menuItems = [],
  mode = 'inline',
  theme = 'dark',
  selectedKeys = [],
  collapsed = false,
  onClick = () => {},
  ...rest
}) {
  const renderTooltip = (label, hasSubmenu) => {
    if (hasSubmenu && !collapsed) {
      return (
        <Tooltip title={label} placement="right">
          <span>{label}</span>
        </Tooltip>
      );
    }
    return <span>{label}</span>;
  };

  const renderMenuItems = (items, isNested = false) => {
    return items.map(item => {
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      if (hasSubmenu) {
        return (
          <AntdMenu.SubMenu key={item.key} title={renderTooltip(item.label, true)} icon={item.icon}>
            {renderMenuItems(item.submenu, true)}
          </AntdMenu.SubMenu>
        );
      }
      return (
        <AntdMenu.Item key={item.key} icon={item.icon} onClick={() => onClick(item)}>
          {renderTooltip(item.label, isNested)}
        </AntdMenu.Item>
      );
    });
  };

  return (
    <AntdMenu key={collapsed ? 'collpsed' : 'expand'} selectedKeys={selectedKeys} theme={theme} mode={mode} {...rest}>
      {renderMenuItems(menuItems)}
    </AntdMenu>
  );
}
