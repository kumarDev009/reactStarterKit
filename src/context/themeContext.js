import { useState, useEffect, createContext } from 'react';

import { setStorage, getStorage } from '../services/storage';
import { DARK_THEME, LIGHT_THEME } from 'constants/theme';
import { getThemeConfig } from 'constants/themeConfig';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const getTheme = () => getStorage('theme') === DARK_THEME;

  const [isDarkMode, setIsDarkMode] = useState(getTheme);
  const [themeConfig, setThemeConfig] = useState(() => getThemeConfig(getTheme()));

  useEffect(() => {
    setStorage('theme', isDarkMode ? DARK_THEME : LIGHT_THEME);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    setThemeConfig(getThemeConfig(!isDarkMode));
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeConfig }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
