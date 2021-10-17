import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import RESet from "./style/RESET/reset";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RESet />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
