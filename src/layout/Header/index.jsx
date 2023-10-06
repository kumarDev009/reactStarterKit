import React, { useRef, useState, useEffect, useContext } from 'react';
import { Avatar, Layout, Popover, Select, Row, Col, Form, Divider, Card, Typography } from 'antd';
import { BellOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getStorage, removeStorage, setStorage } from 'services/storage/index.js';
import i18n from 'i18n';
import { getMenuArr } from 'constants/Menu';
import { EN_US, ES_ES } from 'constants/locale';
import CustomTitle from 'components/Title';
import { AuthContext } from 'context/authContext';

const { Header } = Layout;
const { Option } = Select;
const { Text } = Typography;

const notifications = [
  {
    title: 'Congratulations, Flora!',
    message: 'Your order has been placed successfully',
    timestamp: 'Just now',
    avatarColor: '#87d068'
  },
  {
    title: 'Reminder for Meeting',
    message: 'Your meeting with Alex starts in 30 minutes',
    timestamp: '15 minutes ago',
    avatarColor: '#ff4d4f'
  }
];

export default function CustomHeader() {
  const [locale, setLocale] = useState(() => getStorage('locale') || EN_US);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [notificationData, setNotificationData] = useState(notifications);

  const { setHasStorage } = useContext(AuthContext);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const bellRef = useRef(null);
  const contentRef = useRef(null);

  const menuArr = getMenuArr(t);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        bellRef.current &&
        !bellRef.current.contains(event.target) &&
        contentRef.current &&
        !contentRef.current.contains(event.target)
      ) {
        setPopoverVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = lng => {
    setStorage('locale', lng);
    setLocale(lng);
    i18n.changeLanguage(lng);
  };

  const handleMenuClick = path => {
    if (path === '/logout') {
      removeStorage('username');
      setHasStorage(null);
    } else navigate(path);
  };

  const headerProfileIcon = () => {
    return (
      <Card className="shadow-1" bodyStyle={{ padding: '15px' }}>
        <Row align="middle" justify="center" className="profile-info">
          <Col>
            <Avatar size={50} icon={'AV'} />
          </Col>
          <Col className="mx-2 d-flex flex-column">
            <Text className="profile-name">Anika Visser</Text>
            <Text className="profile-email">demo@devias.io</Text>
          </Col>
        </Row>
        <Divider className="my-2" />
        {menuArr.map((item, index) => (
          <React.Fragment key={index}>
            <Row
              align="middle"
              justify="center"
              className={'menu-item cursor-pointer mt-2 mx-2'}
              onClick={() => handleMenuClick(item.path)}
            >
              <Col>
                <Text>{item.icon}</Text>
              </Col>
              <Col flex="auto">
                <Text className="px-3">{item.label}</Text>
              </Col>
            </Row>
          </React.Fragment>
        ))}
      </Card>
    );
  };

  const clearNotification = id => {
    setNotificationData(prev => [...prev.filter((_, index) => index !== id)]);
  };

  const NotificationItem = ({ notification, onClear }) => {
    return (
      <>
        <Col span={24} className="d-flex justify-content-between align-items-center">
          <Avatar size={50} icon={'AV'} style={{ backgroundColor: notification.avatarColor }} />
          <div className="notification-content">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div style={{ fontWeight: 'bold' }}>{notification.title}</div>
                <div>{notification.message}</div>
              </div>
              <CloseOutlined className="cursor-pointer" onClick={onClear} style={{ fontSize: '1.2rem' }} />
            </div>
            <Text className="timestamp">{notification.timestamp}</Text>
          </div>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
      </>
    );
  };

  const NotificationContent = () => {
    return (
      <Card
        onClick={e => e.stopPropagation()}
        ref={contentRef}
        style={{ minWidth: '400px' }}
        className="custom-popover-content shadow-1"
        title={
          <div className="d-flex justify-content-between align-items-center cursor-pointer">
            <CustomTitle level={5}>Notifications</CustomTitle>
            <MailOutlined />
          </div>
        }
      >
        <Row gutter={[16, 16]} className="notification-row">
          {notificationData.length ? (
            notificationData.map((notification, index) => (
              <NotificationItem key={index} notification={notification} onClear={() => clearNotification(index)} />
            ))
          ) : (
            <Text>There are no notifications</Text>
          )}
        </Row>
      </Card>
    );
  };

  const handleBellClick = () => {
    setPopoverVisible(prevState => !prevState);
  };

  return (
    <Header className="header px-2">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Row align="middle" gutter={[16, 0]}>
          <Col ref={bellRef} onClick={handleBellClick}>
            <BellOutlined style={{ color: 'white', marginRight: '1rem', cursor: 'pointer', fontSize: '1.5rem' }} />
            {popoverVisible && <div className="custom-popover-content">{<NotificationContent />}</div>}
          </Col>
          <Col>
            <Form initialValues={{ locale }} name="form_select">
              <Select //Todo: need to integrate the common component of select box once it's ready.
                name="locale"
                defaultValue={locale}
                style={{ width: 120 }}
                onChange={changeLanguage}
              >
                <Option value={EN_US}>English</Option>
                <Option value={ES_ES}>Spanish</Option>
              </Select>
            </Form>
          </Col>
          <Col>
            <Popover
              overlayInnerStyle={{ padding: 0, marginRight: '0.5rem' }}
              placement="bottom"
              content={headerProfileIcon}
              trigger="click"
            >
              <Avatar
                size={40}
                style={{ border: '1px solid #ffff', background: '#1677ff' }}
                className="cursor-pointer"
                icon={'AV'}
              />
            </Popover>
          </Col>
        </Row>
      </Row>
    </Header>
  );
}
