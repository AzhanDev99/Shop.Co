import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { CartProvider } from './Context/CartContext.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
   
)
