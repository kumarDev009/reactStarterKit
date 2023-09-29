import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18n';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import './index.scss';

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
