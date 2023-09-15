import { createGlobalStyle } from "styled-components";

export const CSSreset = createGlobalStyle`
body{
    background: url(../public/images/bg-pokemon.jpg) center center no-repeat fixed;
    background-size: cover;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`;  
