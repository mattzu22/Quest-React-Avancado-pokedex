import styled from "styled-components"

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .search{
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    max-width: 400px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
  }

  input{
    width: 80%;
    padding: 4px 15px;
    border: none;
    outline: none;
  }

  button{
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: white;
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid black;
    width: 40px;
    height: 40px;
  }

  img{
    max-width: 250px;
  }
`
