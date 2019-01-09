import React, { Component } from "react";
import { DateForm } from "../DateForm/dateform.js";
import { StyledLanding } from "./landingstyle.js";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <StyledLanding>
          <div>
            <h1>Martian Viewer</h1>
            <h3>
              Pick a date and get a picture from the Curiosity Rover from that
              day!
            </h3>
          </div>
          <DateForm />
        </StyledLanding>
      </div>
    );
  }
}

export { Landing };
