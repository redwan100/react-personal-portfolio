import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`


html{
  scroll-behavior: smooth;
}
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:"Poppins", sans-serif;
  }
  
  body{
    padding: 2rem;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.fontColor};
    transition: all .2s ease;
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


@media (max-width: 580px){
  body{
    padding: 1rem;
  }
}
@media (min-width: 980px){
  body{
    padding: 3rem;
  }
}
`;
export default GlobalStyle;
