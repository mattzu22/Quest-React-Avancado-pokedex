import styled from "styled-components";

export const Search = styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid ${({theme}) => theme.color};
    max-width: 400px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
 
  input{
    width: 80%;
    padding: 4px 15px;
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.color};
    transition: 0.3s ease-in-out;
  }

  button{
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({theme}) => theme.bg};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({theme}) => theme.color};
    width: 40px;
    height: 40px;
    transition: 0.3s ease-in-out;
  }
`
