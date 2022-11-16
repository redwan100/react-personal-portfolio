import { createGlobalStyle } from 'styled-components';
import Bg from './assets/bg.png';

const GlobalStyle = createGlobalStyle`
:root{
    --primary-clr: #FFC500;
    --primary-clr-alt:#FFC913;
    --white-clr: #FFFFFF;
    --text-clr:#1111;
}
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:"Poppins", sans-serif
 }

 body{
   background-color: gray;
   padding: 1rem;
 }

 a{
    text-decoration: none;
    color: black;
 }

 ul, li{
   list-style: none;
 }

 p{
    font-size: 14px;
 }
 img{
   max-width: 100%;
   object-fit: cover;
 }
.container{
    max-width: 1240px;
    width: 99%;
    margin: 0 auto;
}

`;
export default GlobalStyle;
