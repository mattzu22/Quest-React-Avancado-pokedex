import styled from "styled-components";

export const StyleDiv = styled.div`
  .btn {
    color: ${({ theme }) => theme.colorMode};
    background-color: ${({ theme }) => theme.bgMode};
    position: absolute; 
    top: 0; 
    right: 40px; 
    padding: 10px 20px;
    border: none; 
    border-radius: 5px; 
    font-weight: 900; 
    font-size: 15px;
  }
`;
