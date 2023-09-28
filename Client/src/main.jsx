import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el enrutador

import AppRoutes from './routes/Routes';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <Router> {/* Envolvemos toda la aplicación con el enrutador */}
      <App />
      <AppRoutes />
    </Router>
  </React.StrictMode>
);
