import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { CounterApp } from "./CounterApp";
import { FirstApp } from "./FirstApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelloWorldApp /> */}
    {/* <FirstApp title="Hola, soy vegeta" /> */}
    <CounterApp value={100} />
  </React.StrictMode>
);
