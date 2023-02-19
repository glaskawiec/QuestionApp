import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to left bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    }
`;

export default GlobalStyle;
