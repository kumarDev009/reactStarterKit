import { useState, useEffect, createContext } from 'react';
import { notification as AntdNotification } from 'antd';

import { setStorage, getStorage } from '../services/storage';
import { DARK_THEME, LIGHT_THEME } from 'constants/theme';
import { getThemeConfig } from 'constants/themeConfig';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const getTheme = () => getStorage('theme') === DARK_THEME;

  const [isDarkMode, setIsDarkMode] = useState(getTheme);
  const [themeConfig, setThemeConfig] = useState(() => getThemeConfig(getTheme()));

  const [notificationApi, notificationContextHolder] = AntdNotification.useNotification();

  useEffect(() => {
    setStorage('theme', isDarkMode ? DARK_THEME : LIGHT_THEME);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    setThemeConfig(getThemeConfig(!isDarkMode));
  };

  const openNotification =
    type =>
    (message = '', description = '') => {
      notificationApi[type]({ message, description });
    };

  const notification = {
    info: openNotification('info'),
    error: openNotification('error'),
    success: openNotification('success'),
    warn: openNotification('warning')
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        themeConfig,
        notification,
        notificationContextHolder
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
