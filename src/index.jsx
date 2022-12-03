import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <ReactQueryDevtools />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
