import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Axios from "axios"

// Stop axios throwing
Axios.defaults.validateStatus = () => true
// Make axios send cookies in requests by default
Axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);