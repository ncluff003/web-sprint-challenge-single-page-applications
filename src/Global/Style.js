import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font: inherit;
    vertical-align: baseline;
    font-family: MADE Tommy Soft, Days One,Varela Round, Quicksand;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  
  body {
    position: relative;
    height: 100%;
    width: 100vw;
    box-sizing: border-box;
    background-color: #FEFefe;
    overflow-x: hidden;
  }
  .closed {
    display: none !important;
  }
  .open {
    display: flex;
  }

  .error {
    color: #cf352e;
    &--centered {
      text-align: center;
    }
  }
`;

export default GlobalStyle;
