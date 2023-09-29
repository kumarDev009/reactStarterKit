import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import './index.scss';
import i18n from './i18n';

function App() {
  useEffect(() => {
    i18n.on('initialized');
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routers />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
