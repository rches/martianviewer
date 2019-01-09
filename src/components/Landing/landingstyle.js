import React, { Component } from "react";
import styled from "styled-components";

const StyledLanding = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Sans|Karla");
  background: linear-gradient(to top left, #D67975, #D6ACAB, #C98CA7);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Karla", sans-serif;
  color: #393d3f;
  width: 75%;
  text-align: center;
  margin: auto;
  box-shadow: 5px 3px 30px #C98CA7, -5px -3px 30px #D67975;

  h1 {
    font-family: "Karla", sans-serif;
    color: #393d3f;
  }

  h3 {
    font-size: 0.9rem;
  }
`;

export { StyledLanding };
