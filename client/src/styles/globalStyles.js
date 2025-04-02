import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'American Typewriter';
    src: url('/fonts/American-Typewriter-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    user-select: none;
   -webkit-tap-highlight-color: transparent !important;

  }

  body {
    font-family: ${({ theme }) => theme.typography.font};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }

  html{
  margin: 0;
    padding: 0;}
`;
