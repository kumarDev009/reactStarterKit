import { theme } from 'antd';

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

export const getThemeConfig = isDarkMode => {
  return {
    components: {
      Layout: {
        colorBgHeader: isDarkMode ? '#141414' : '#ffffff'
      }
    },
    algorithm: [isDarkMode ? darkAlgorithm : defaultAlgorithm, compactAlgorithm]
  };
};
