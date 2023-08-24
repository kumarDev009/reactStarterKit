import { Menu as AntdMenu, Popover } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export default function CustomMenu({
  menuItems = [],
  mode = 'inline',
  theme = 'dark',
  selectedKeys,
  collapsed = false,
  onClick = () => {},
  ...rest
}) {
  const renderPopoverContent = submenu => {
    return (
      <div className="popover-menu-wrapper">
        <AntdMenu theme="light" className="sub-menu">
          {submenu.map(subItem => {
            if (subItem.submenu && subItem.submenu.length) {
              const nestedContent = renderPopoverContent(subItem.submenu);
              return (
                <AntdMenu.Item key={subItem.key} title="">
                  <Popover content={nestedContent} trigger="hover" placement="right" overlayInnerStyle={{ padding: 0 }}>
                    <span onClick={() => onClick(subItem)} className="d-flex align-item-center">
                      {subItem.icon && <span className="sub-menu-icon">{subItem.icon}</span>}
                      <span>{subItem.label}</span>
                      <span className="right-icon">
                        <RightOutlined />
                      </span>
                    </span>
                  </Popover>
                </AntdMenu.Item>
              );
            }
            return (
              <AntdMenu.Item key={subItem.key} onClick={() => onClick(subItem)}>
                {subItem.icon && <span className="sub-menu-icon">{subItem.icon}</span>}
                {subItem.label}
              </AntdMenu.Item>
            );
          })}
        </AntdMenu>
      </div>
    );
  };

  const renderMenuItems = items => {
    return items.map(item => {
      if (item.submenu && item.submenu.length && collapsed) {
        const content = renderPopoverContent(item.submenu);
        return (
          <AntdMenu.Item
            key={item.key}
            title=""
            className={selectedKeys.includes(item.key) ? 'ant-menu-item-selected' : ''}
          >
            <Popover content={content} trigger="hover" placement="rightTop" overlayInnerStyle={{ padding: 0 }}>
              <span onClick={() => onClick(item)}>
                {item.icon}
                {item.submenu && item.submenu.length && <RightOutlined />}
              </span>
            </Popover>
          </AntdMenu.Item>
        );
      }
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
