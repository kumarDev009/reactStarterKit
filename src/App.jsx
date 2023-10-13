import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import './index.scss';
import './constants/config';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routers />
        </AuthContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
