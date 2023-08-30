import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import { ThemeContext } from 'context/themeContext';
import ErrorBoundary from 'components/ErrorBoundary';
import { getThemeConfig } from 'constants/theme';
import './index.scss';

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const themeConfig = getThemeConfig(isDarkMode);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ConfigProvider theme={themeConfig}>
          <Routers />
        </ConfigProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
