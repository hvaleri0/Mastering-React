import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn: "https://561163c459234807bdc9da2c0e43081b@sentry.io/1457238"
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
