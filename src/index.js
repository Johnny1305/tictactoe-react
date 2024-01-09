import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Configura el elemento principal para ReactModal
ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un punto de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
