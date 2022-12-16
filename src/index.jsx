import './index.css';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/jsdom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/*" element={ <App /> } />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
