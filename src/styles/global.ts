import { createGlobalStyle } from 'styled-components'

import BackgroundImg from '../assets/BackgroundImg.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${BackgroundImg}) no-repeat;
    background-color: ${props => props.theme.colors.background};
    background-size: cover;
    background-position: center;
    font: 400 16px Roboto, sans-serif;
  }
`
