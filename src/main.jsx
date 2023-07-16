import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import store from "./store.js";
import { Provider } from "react-redux";

const container = document.querySelector("#react-container-1");
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
