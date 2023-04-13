import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

const El = document.getElementById('root');
const root = ReactDOM.createRoot(El);

root.render(
  <div>
    <Provider>
      <App />
    </Provider>
  </div>
);
