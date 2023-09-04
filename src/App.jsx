import { BrowserRouter } from 'react-router-dom';

import Routers from 'routers';
import AuthContextProvider from 'context/authContext';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routers />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
