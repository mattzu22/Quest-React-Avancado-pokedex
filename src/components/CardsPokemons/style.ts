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
    position: relative;
    margin: 40px 0 20px 0;
    width: 100%;
    cursor: pointer;
  }

  .button-text {
    position: relative;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 20px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(185, 174, 174, 1) 100%
    );
    border-radius: 4px;
    transition: all 0.2s;
  }

  .button-loading .button-text {
    color: transparent;
    transition: 0.5s ease-in-out;
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
