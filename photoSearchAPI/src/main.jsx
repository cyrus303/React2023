import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import searchImages from './API';

searchImages();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
