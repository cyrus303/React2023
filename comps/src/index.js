import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NavigationProvider } from './context/navigation';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
