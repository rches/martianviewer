import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Landing } from "./components/Landing/landing.js";
import "./styles.css";

function App() {
  return <Landing />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
