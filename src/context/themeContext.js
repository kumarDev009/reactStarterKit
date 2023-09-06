import { useState, useEffect, createContext } from 'react';

import { setStorage, getStorage } from '../services/storage';
import { DARK_THEME, LIGHT_THEME } from 'constants/theme';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => getStorage('theme') === DARK_THEME);

  useEffect(() => {
    setStorage('theme', isDarkMode ? DARK_THEME : LIGHT_THEME);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
