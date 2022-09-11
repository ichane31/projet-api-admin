import React from 'react';
import {createRoot} from 'react-dom/client';

import './css/index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { AuthProvider } from './contexts/AuthContext';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ContextProvider>
          <App />
      </ContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
