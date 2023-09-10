import { useContext } from 'react';
import { Avatar, Layout, Popover } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { AuthContext } from 'context/authContext';
import { ThemeContext } from 'context/themeContext';
import { removeStorage } from 'services/storage/index.js';
import Switch from 'components/Switch';

const { Header } = Layout;

export default function CustomHeader() {
  const { setHasStorage } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const menuArr = [
    {
      label: 'Logout',
      icon: LogoutOutlined
    }
  ];
  const headerProfileIcon = () => {
    return (
      <div>
        {menuArr.map(({ icon: Icon, label }, index) => {
          return (
            <div
              onClick={() => {
                removeStorage('username');
                setHasStorage(null);
              }}
              key={index}
              className="d-flex justify-content-center align-items-center cursor-pointer"
            >
              <span>
                <Icon />{' '}
              </span>
              <span className="ps-2 mt-1">{label}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="header">
      <Header className="d-flex justify-content-end align-items-center pe-4">
        <Switch
          checkedChildren={<span className="toggle-icon">🌜</span>}
          unCheckedChildren={<span className="toggle-icon">🌞</span>}
          checked={isDarkMode}
          onChange={toggleTheme}
          className="mr-3"
        />
        <Popover placement="bottom" content={() => headerProfileIcon()} trigger="click">
          <Avatar
            className="cursor-pointer"
            size={40}
            icon={
              <UserOutlined
                className="d-flex justify-content-center align-items-center h-100"
                style={{ color: 'black' }}
              />
            }
          />
        </Popover>
      </Header>
    </div>
  );
}
