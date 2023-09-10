import { useEffect, useState } from 'react';
import { Menu as AntdMenu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = ({ menuItems = [], mode = 'inline', onClick = () => {}, style = {}, ...rest }) => {
  const [selectedKeys, setSelectedKeys] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location]);

  const handleSidebarMenu = item => {
    navigate(item.key);
  };

  return (
    <AntdMenu
      selectedKeys={selectedKeys}
      mode={mode}
      onClick={handleSidebarMenu}
      items={menuItems}
      style={style}
      {...rest}
    />
  );
};

export default Menu;
