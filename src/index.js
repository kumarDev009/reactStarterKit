import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.scss';
import ThemeProvider from 'context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
