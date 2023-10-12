import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import { ThemeContext } from 'context/themeContext';
import { getThemeConfig } from 'constants/themeConfig';

import './index.scss';
import './constants/config';

const queryClient = new QueryClient();

function App() {
  const { isDarkMode } = useContext(ThemeContext);
  const themeConfig = getThemeConfig(isDarkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <ConfigProvider theme={themeConfig}>
            <Routers />
          </ConfigProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
