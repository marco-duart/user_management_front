import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.primary};
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {    
    background-color: ${(props) => props.theme.colors.background};
    margin: 0;
    padding: 0;
    
    
  }

`;
