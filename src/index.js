import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // StrictMode -> Auxilia no desenvolvimento informando quando algo está errado
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

