import { theme } from 'antd';

import { DARK, DARK_PRIMARY_BG, LIGHT, LIGHT_PRIMARY_BG } from './theme';

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

const THEME_CONFIG = {
  token: {
    colorPrimaryBg: { DARK: DARK_PRIMARY_BG, LIGHT: LIGHT_PRIMARY_BG }
  },
  components: {
    Menu: {
      colorPrimary: { DARK: LIGHT, LIGHT: DARK }
    },
    Layout: {
      colorBgHeader: { DARK: DARK, LIGHT: LIGHT },
      colorTextLightSolid: { DARK: LIGHT, LIGHT: DARK }
    },
    Button: {
      colorLinkHover: { DARK: DARK_PRIMARY_BG, LIGHT: DARK_PRIMARY_BG }
    }
  },
  algorithm: { DARK: darkAlgorithm, LIGHT: defaultAlgorithm }
};

const mappedConfig = (obj, mode) => {
  let result = {};
  for (const key in obj) {
    if (obj[key][mode]) {
      result[key] = obj[key][mode];
    } else if (typeof obj[key] === 'object') {
      result[key] = mappedConfig(obj[key], mode);
    }
  }
  return result;
};

export const getThemeConfig = isDarkMode => {
  const mode = isDarkMode ? 'DARK' : 'LIGHT';
  const mappedTheme = mappedConfig(THEME_CONFIG, mode);
  mappedTheme.algorithm = [mappedTheme.algorithm, compactAlgorithm];
  return mappedTheme;
};
