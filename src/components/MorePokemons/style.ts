import styled from "styled-components";

export const ButtonMorePokemons = styled.div`
 width: 100%;
 margin: 20px 0 10px 0;

 .button{
    position: relative;
    cursor: pointer;

    &:disabled{
      cursor: not-allowed;
    }
  }
   
  .button-text {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 20px;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 1) 30%,
      rgba(185, 174, 174, 1) 60%
    );
    border-radius: 4px;
    transition: all 0.2s;
  }

  .button-loading .button-text {
    color: transparent;
  }

  .button-loading::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: black;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`