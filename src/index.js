import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga4";

ReactDOM.render(<App />, document.getElementById("root"));
ReactGA.initialize("G-ZNPET376M2"); // Ganti dengan Measurement ID Anda
ReactGA.send("pageview");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
