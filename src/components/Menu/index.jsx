import { useMemo, useCallback } from 'react';
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
  const renderTooltip = useCallback(
    (label, hasSubmenu) => {
      if (!collapsed && hasSubmenu) {
        return (
          <Tooltip title={label} placement="right">
            {label}
          </Tooltip>
        );
      }
      return label;
    },
    [collapsed]
  );

  const constructMenuItems = useCallback(
    (items, isNested = false) => {
      return items.map(({ key, icon, label, submenu }) => {
        const hasSubmenu = submenu && submenu.length > 0;

        if (hasSubmenu) {
          return {
            key,
            icon,
            label: renderTooltip(label, isNested),
            children: constructMenuItems(submenu, true)
          };
        }

        return {
          key,
          icon,
          label: renderTooltip(label, isNested)
        };
      });
    },
    [renderTooltip]
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
