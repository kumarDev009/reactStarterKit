import { theme } from 'antd';

import { DARK, DARK_PRIMARY_BG, LIGHT, LIGHT_PRIMARY_BG } from './theme';

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

export const getThemeConfig = isDarkMode => {
  return {
    token: {
      colorPrimaryBg: isDarkMode ? DARK_PRIMARY_BG : LIGHT_PRIMARY_BG
    },
    components: {
      Menu: {
        colorPrimary: isDarkMode ? LIGHT : DARK
      },
      Layout: {
        colorBgHeader: isDarkMode ? DARK : LIGHT,
        colorTextLightSolid: isDarkMode ? LIGHT : DARK
      },
      Button: {
        colorLinkHover: DARK_PRIMARY_BG
      }
    },
    algorithm: [isDarkMode ? darkAlgorithm : defaultAlgorithm, compactAlgorithm]
  };
};
