import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "store/configure-store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/globals.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>
);
