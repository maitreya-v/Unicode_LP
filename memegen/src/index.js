import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './context/source';
import reportWebVitals from './reportWebVitals';
import { dark } from '@mui/material/styles/createPalette';
import darkTheme from './context/source';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <darkTheme.Provider value={darkTheme}>
    <App />
    </darkTheme.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
