import { Menu as AntdMenu } from 'antd';

const Menu = ({
  menuItems = [],
  mode = 'inline',
  theme = 'dark',
  selectedKeys,
  onClick = () => {},
  style = {},
  ...rest
}) => {
  return (
    <AntdMenu
      selectedKeys={selectedKeys}
      theme={theme}
      mode={mode}
      onClick={onClick}
      items={menuItems}
      style={style}
      {...rest}
    />
  );
};

export default Menu;
