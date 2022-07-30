import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import store from './Redux/Redux/Store/Store';
import AppRouter from './routers/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
