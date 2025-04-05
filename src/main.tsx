import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"; 
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient();





if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
} else {
  throw new Error("No se encontró el elemento con id 'root'");
}
