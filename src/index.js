import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Globalstyle from "./globalstyle/globalstyle";
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Globalstyle />
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
