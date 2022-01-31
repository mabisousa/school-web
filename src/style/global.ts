import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #353535;
    color: #fff;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto Slab, sans-serif;
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
  }
  
  button{
    cursor: pointer;
  }
`;