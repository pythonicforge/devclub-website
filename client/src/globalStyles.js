import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  button {
    &:hover {
      color: inherit;
      background-color: inherit;
      border-color: inherit;
      box-shadow: none;
    }
  }
`;

export default GlobalStyles;
