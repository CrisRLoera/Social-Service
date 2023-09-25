import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Routes from './routes/Routes';

const root = document.getElementById('root');

createRoot(root).render(
  <React.StrictMode>
    <App />
    <Routes />
  </React.StrictMode>
);

