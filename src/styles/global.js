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
  --color1: #a3b18a;
  --color2: #1c6278;
  --color3: #f5f3f4;
  --color4: #faedcd;
  --color5: #cd9777;
  --color6: #110f0d;
}
`;
