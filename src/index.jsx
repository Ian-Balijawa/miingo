import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
