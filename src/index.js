import React from 'react';
import ReactDOM from 'react-dom/client';
import './styled/index.css';
import App from './components/app/App';
import './components/app/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


