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

:root{
  --color-primary: #a3b18a;
  --color-primary-light: #b0bf90;
  --color-secondary: #1c6278;
  --color-white: #f5f3f4;
  --color-off-white: #faedcd;
  --color-contrast: #cd9777;
  --color-black: #110f0d;
}
`;
