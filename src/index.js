import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { DateForm } from "./components/DateForm/dateform.js";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Martian Viewer</h1>
        <h3>
          Pick a date and get a picture from the Curiosity Rover from that day!
        </h3>
      </div>
      <DateForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
