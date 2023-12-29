import { useRef, useState, useContext, useEffect } from 'react';
import { Layout, Select, Row, Col, Form, Avatar, Popover } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getStorage, removeStorage, setStorage } from '../../services/storage';
import i18n from '../../i18n';
import { EN_US, ES_ES } from '../../constants/locale';
import { AuthContext } from '../../context/authContext';
import { ThemeContext } from '../../context/themeContext';
import NotificationContent from './components/NotificationContent';
import ProfilePopoverContent from './components/ProfilePopoverContent';
import { getMenuArr, notifications } from 'constants/header';
import Switch from 'components/Switch';
import { LOGIN_PATH } from 'constants/route';

const { Header } = Layout;
const { Option } = Select;

export default function CustomHeader() {
  const [locale, setLocale] = useState(getStorage('locale') || EN_US);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [notificationData, setNotificationData] = useState(notifications);
  const { setHasStorage } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const bellRef = useRef(null);
  const contentRef = useRef();

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
    if (path === LOGIN_PATH) {
      removeStorage('authToken');
      setHasStorage(false);
      navigate(LOGIN_PATH);
    } else navigate(path);
  };

  const handleBellClick = () => {
    setPopoverVisible(prevState => !prevState);
  };

  const clearNotification = id => {
    setNotificationData(prev => prev.filter((_, index) => index !== id));
  };

  const headerProfileIcon = () => {
    return <ProfilePopoverContent menuArr={getMenuArr(t)} onMenuClick={handleMenuClick} />;
  };

  return (
    <Header className="header px-2">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Row align="middle" gutter={[16, 0]}>
          <Col ref={bellRef} onClick={handleBellClick}>
            <BellOutlined className="cursor-pointer fs-3" />
            {popoverVisible && (
              <NotificationContent
                notificationData={notificationData}
                clearNotification={clearNotification}
                ref={contentRef}
              />
            )}
          </Col>
          <Col>
            <Form initialValues={{ locale }} name="form_select">
              <Select name="locale" value={locale} style={{ width: 120 }} onChange={changeLanguage}>
                <Option value={EN_US}>English</Option>
                <Option value={ES_ES}>Spanish</Option>
              </Select>
            </Form>
          </Col>
          <Col>
            <Form initialValues={{ theme: isDarkMode }} name="theme_form">
              <Switch
                name="theme"
                checked={isDarkMode}
                checkedChildren={<span className="toggle-icon">🌜</span>}
                unCheckedChildren={<span className="toggle-icon">🌞</span>}
                onChange={toggleTheme}
              />
            </Form>
          </Col>
          <Col>
            <Popover
              overlayInnerStyle={{ padding: 0, marginRight: '0.5rem' }}
              placement="bottom"
              content={headerProfileIcon}
              trigger="click"
            >
              <Avatar size={40} className="cursor-pointer" icon={<UserOutlined />} />
            </Popover>
          </Col>
        </Row>
      </Row>
    </Header>
  );
}
