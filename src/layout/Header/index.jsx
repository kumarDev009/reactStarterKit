import { useContext } from 'react';
import { Avatar, Layout, Popover, Row, Col } from 'antd';
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
    <Row className="header">
      <Col span={24}>
        <Header className="d-flex justify-content-between align-items-center p-4">
          <Row className="home-screen-logo">
            <img src="/assets/images/logo.png" alt="mainlogo" />
          </Row>
          <Popover placement="bottom" content={() => headerProfileIcon()} trigger="click">
            <Avatar
              className="cursor-pointer"
              size={40}
              icon={<UserOutlined className="d-flex justify-content-center align-items-center h-100" />}
            />
          </Popover>
        </Header>
      </Col>
    </Row>
  );
}
