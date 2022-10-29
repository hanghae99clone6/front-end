<<<<<<< HEAD
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';
import App from './App';
=======
import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import App from "./App";
>>>>>>> 91ca3c5 (.)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
);
