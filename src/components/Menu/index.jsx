import { useMemo, useCallback } from 'react';
import { Menu as AntdMenu, Tooltip } from 'antd';

export default function Menu({
  menuItems = [],
  mode = 'inline',
  theme = 'dark',
  selectedKeys = [],
  collapsed = false,
  onClick = () => {},
  menuPlacement = 'right',
  ...rest
}) {
  const renderMenuLabel = useCallback(
    (label, hasSubmenu) => {
      if (!collapsed && hasSubmenu) {
        return (
          <Tooltip title={label} placement={menuPlacement}>
            {label}
          </Tooltip>
        );
      }
      return label;
    },
    [collapsed, menuPlacement]
  );

  const constructMenuItems = useCallback(
    (items, isNested = false) => {
      return items.map(({ key, icon, label, submenu }) => {
        const hasSubmenu = submenu && submenu?.length;
        return {
          key,
          icon,
          label: renderMenuLabel(label, isNested),
          ...(hasSubmenu && { children: constructMenuItems(submenu, true) })
        };
      });
    },
    [renderMenuLabel]
  );

  const listOfItems = useMemo(() => constructMenuItems(menuItems), [menuItems, constructMenuItems]);

  return (
    <AntdMenu
      key={collapsed ? 'collapsed' : 'expand'}
      selectedKeys={selectedKeys}
      theme={theme}
      mode={mode}
      onClick={onClick}
      items={listOfItems}
      {...rest}
    />
  );
}
