import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Spin } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import AuthContextProvider from './services/context/authContext';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div>
            <Spin />
          </div>
        }
      >
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
