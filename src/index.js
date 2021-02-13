import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./context/StoreProvider";
import App from "./route/App";

import "./index.css";

ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
