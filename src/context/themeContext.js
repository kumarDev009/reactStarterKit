import React, { createContext, useState, useEffect } from 'react';
import { setStorage, getStorage } from '../services/storage';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storedTheme = getStorage('theme');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      setStorage('theme', 'dark');
    } else {
      setStorage('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
