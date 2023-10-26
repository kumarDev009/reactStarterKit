import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import ThemeProvider, { ThemeContext } from 'context/themeContext';

import './index.scss';
import './constants/config';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {({ themeConfig }) => (
              <AuthContextProvider>
                <ConfigProvider theme={themeConfig}>
                  <Routers />
                </ConfigProvider>
              </AuthContextProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
