import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "https://localhost:7012/Sites/TesteAPI";
axios.defaults.headers.post["Content-Type"] = "application/json";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);