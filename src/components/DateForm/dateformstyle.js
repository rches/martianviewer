import React, { Component } from "react";
import styled from "styled-components";

const StyledDateForm = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Fira+Sans|Karla");
  background-color: #393d3f;
  width: 80%;
  padding: 1rem;
  box-shadow: 0px 1px 5px #555;
  margin: auto;

  }

  .earthdate {    
    color: #d67975;
    font-family: "Fira Sans", sans-serif;
       
  }

  input[type="date"] {
    font-family: "Fira Sans", sans-serif;    
    background: #d6acab;
    border: 2px solid #d67975;
    border-radius: 0;       
    -webkit-appearance: none;
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-calendar-picker-indicator { 
    color: #393d3f;
    background: #d6acab;    
     }     
  }

    input[type="submit"] {    
    font-family: "Fira Sans", sans-serif;
    background: #d6acab;
    border: 2px solid #d67975;
    border-radius: 0;
    -webkit-appearance: none;
    transition: 0.3s;
      :hover {
          background: #d67975;    
  }


`;

const StyledImage = styled.div`
  .noImg {
    border: none;
    oppacity: 0;
  }

  .imgOut {
    width: 80%;
    border: 1rem solid #393d3f;
    box-shadow: 0px 1px 5px #555;
    outline: 10px solid #d67975;
    outline-offset: -20px;
  }
`;

export { StyledDateForm, StyledImage };
