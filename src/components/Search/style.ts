import styled from "styled-components";

export const Search = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.color};
    max-width: 400px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
    position: relative;
    
    &.invalido{
      border: 2px solid red;
      outline: none;
      animation: shake .2s ease-in-out 0s 2;
    }

    @keyframes shake{
      0%{transform: translateX(0rem)}
      25%{transform: translateX(-0.5rem)}
      75%{transform: translateX(0.5rem)}
      100%{transform: translateX(0rem)}
    }
  
 
  input{
    width: 80%;
    padding: 4px 15px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.color};
    transition: 0.3s ease-in-out;
  }

  button{
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.bg};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.color};
    width: 40px;
    height: 40px;
    transition: 0.3s ease-in-out;
  }

  span{
    display: none;
    position: absolute;
    bottom: -10px;
  }

`
