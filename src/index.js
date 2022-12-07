import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductBasketContext from './context/ProductBasketContext';
import AuthContext from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContext>
    <ProductBasketContext>
      <App />
    </ProductBasketContext>
    </AuthContext>
  </React.StrictMode>
);
