import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color:#171717;
    overflow-x: hidden;
  }

  @media (max-width:768px) {
    html {
      font-size: 50%;
    }
  }
`