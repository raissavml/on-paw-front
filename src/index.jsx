import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />

      <GlobalStyle />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
