import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing:border-box;
  }
  #root{
    padding:5%;
  }
`

export default GlobalStyle
