import { useContext } from 'react';

import { Avatar, Layout, Form, Popover, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { AuthContext } from 'context/authContext';
import { ThemeContext } from 'context/themeContext';
import { removeStorage } from 'services/storage/index.js';
import { menuArr } from 'constants/Menu';
import Switch from 'components/Switch';

const { Header } = Layout;

export default function CustomHeader() {
  const { setHasStorage } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

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
    <Header className="px-2 header">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Row align="middle" gutter={[16, 0]}>
          <Col>
            <Form initialValues={{ theme: isDarkMode }} name="theme_form">
              <Switch
                name="theme"
                checkedChildren={<span className="toggle-icon">🌜</span>}
                unCheckedChildren={<span className="toggle-icon">🌞</span>}
                onChange={toggleTheme}
              />
            </Form>
          </Col>
          <Col>
            <Popover placement="bottom" content={headerProfileIcon} trigger="click">
              <Avatar size={40} className="cursor-pointer" icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </Row>
    </Header>
  );
}
