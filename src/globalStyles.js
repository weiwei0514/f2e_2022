import { createGlobalStyle } from 'styled-components'
import Genos from './fonts/Genos-Medium.ttf'
import GenosBold from './fonts/Genos-Bold.ttf'
import Glory from './fonts/Glory-Medium.ttf'
const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif, Genos, GenosBold, Glory;
    box-sizing:border-box;

  }
  #root{
    overflow:hidden;

  }

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  @font-face {
    font-family: 'Genos';
    src: url(${Genos});
  }

  @font-face {
    font-family: 'GenosBold';
    src: url(${GenosBold});
  }

  @font-face {
    font-family: 'Glory';
    src: url(${Glory});
  }
`

export default GlobalStyle
