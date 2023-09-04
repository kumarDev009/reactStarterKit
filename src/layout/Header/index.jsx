import { useContext, useState, useEffect } from 'react';
import { Avatar, Layout, Popover, Select } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import { AuthContext } from 'context/authContext';
import { getStorage, removeStorage, setStorage } from 'services/storage/index.js';
import i18n from 'i18n';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;
const { Option } = Select;

export default function CustomHeader() {
  let storedLocale = getStorage('locale');
  const [locale, setLocale] = useState(storedLocale || 'en-US');
  const { setHasStorage } = useContext(AuthContext);
  const { t } = useTranslation();

  useEffect(() => {
    if (locale) {
      setStorage('locale', locale);
    }
  }, [locale]);

  const menuArr = [
    {
      label: t('labels.logOut'),
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
  const changeLanguage = lng => {
    setLocale(lng);
    i18n.changeLanguage(lng.split('-')[0]);
  };

  return (
    <div className="header">
      <Header className="d-flex justify-content-end align-items-center pe-4">
        <div style={{ marginRight: '1rem' }}>
          <Select //need to integrate the common component of select box once it's ready.
            value={locale || 'en-US'}
            style={{ width: 120 }}
            onChange={changeLanguage}
          >
            <Option value="en-US">English</Option>
            <Option value="es-ES">Spanish</Option>
          </Select>
        </div>
        <Popover placement="bottom" content={() => headerProfileIcon()} trigger="click">
          <Avatar
            className="cursor-pointer"
            style={{ backgroundColor: '#ffffff' }}
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
