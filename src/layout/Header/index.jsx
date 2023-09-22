import { useContext } from 'react';
import { Avatar, Layout, Popover, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { AuthContext } from 'context/authContext';
import { removeStorage } from 'services/storage/index.js';
import { menuArr } from 'constants/Menu';

const { Header } = Layout;

export default function CustomHeader() {
  const { setHasStorage } = useContext(AuthContext);

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
    <Header className="header px-2">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Popover placement="bottom" content={headerProfileIcon} trigger="click">
          <Avatar size={40} className="cursor-pointer" icon={<UserOutlined />} />
        </Popover>
      </Row>
    </Header>
  );
}
