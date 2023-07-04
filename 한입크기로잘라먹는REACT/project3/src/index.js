import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 라우팅을 위해 브라우저 라우터로 감싸줌
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
