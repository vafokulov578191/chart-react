import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import Context from './Components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    <BrowserRouter>
      <ChakraProvider>
          <App />
      </ChakraProvider>
    </BrowserRouter>
    </Context>
  </React.StrictMode>
);