import { createGlobalStyle } from "styled-components"
import Genos from "./fonts/Genos-Medium.ttf"
import GenosBold from "./fonts/Genos-Bold.ttf"

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif, Genos,GenosBold;
    box-sizing:border-box;
  }
  p{
    margin:0;
  }
  #root{
   
  }
  @font-face {
  font-family: 'Genos';
  src: url(${Genos});
}
@font-face {
  font-family: 'GenosBold';
  src: url(${GenosBold});
}
`

export default GlobalStyle
