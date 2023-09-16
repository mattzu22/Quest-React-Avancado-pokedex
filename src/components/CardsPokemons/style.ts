import styled from "styled-components";

export const CardsPokemonsStyle = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  .button {
    margin: 40px 0 20px 0;
    position:relative; 
    padding: 12px 20px;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(185, 174, 174, 1) 100%
    );
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .button-text {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s;
  }

  .button-loading .button-text {
    visibility: hidden;
    opacity: 0;
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
`;
