import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    outline: 0;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`;
