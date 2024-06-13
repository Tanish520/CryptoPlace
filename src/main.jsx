import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./Context/CoinContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-4cigln04q333cnro.us.auth0.com"
    clientId="EGAQxEEXUKe8bRItwg8GyjThYgz06iow"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>
);
