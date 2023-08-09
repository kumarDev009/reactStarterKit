import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import './index.scss';
import AuthContextProvider from './services/context/authContext';
import { Spin } from 'antd';
import AppContextProvider from './services/context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div><Spin /></div>}>
        <AuthContextProvider>
          <AppContextProvider>
          <App />
          </AppContextProvider>
        </AuthContextProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>

);

