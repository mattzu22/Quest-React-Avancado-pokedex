import { createGlobalStyle } from "styled-components";
import bgBody from "../public/images/bg-pokemon.jpg"

export const CSSreset = createGlobalStyle`
body{
    background: linear-gradient(${({theme})=> theme.bgCard}) ,url(${bgBody}) center center no-repeat fixed;
    background-size: cover;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    transition: 0.3s ease-in-out;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a{
  text-decoration: none;
  color: white;
}

ul{
  list-style: none;
}

button{
  background: transparent;
  border: 0;
}
`;  
