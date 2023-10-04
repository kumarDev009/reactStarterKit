import { useContext, useState } from 'react';
import { Avatar, Layout, Popover, Select, Row, Col, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

import { AuthContext } from 'context/authContext';
import { getStorage, setStorage, removeStorage } from 'services/storage/index.js';
import { getMenuArr } from 'constants/Menu';
import { EN_US, ES_ES } from 'constants/locale';
import { ThemeContext } from 'context/themeContext';
import Switch from 'components/Switch';

const { Header } = Layout;
const { Option } = Select;

export default function CustomHeader() {
  const [locale, setLocale] = useState(() => getStorage('locale') || EN_US);
  const { setHasStorage } = useContext(AuthContext);

  const { t } = useTranslation();

  const menuArr = getMenuArr(t);

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

  const changeLanguage = lng => {
    setStorage('locale', lng);
    setLocale(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Header className="header px-2">
      <Row justify={'space-between'} align="middle">
        <img src="/assets/images/logo.png" className="home-screen-logo" alt="mainlogo" />
        <Row align="middle" gutter={[16, 0]}>
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
