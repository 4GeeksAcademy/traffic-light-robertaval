import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./components/TrafficLight.jsx";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
  document.querySelector('#app')
);

