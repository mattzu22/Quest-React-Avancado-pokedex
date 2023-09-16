import styled from "styled-components";

export const StyleDiv = styled.div`
  .btn {
    color: ${({ theme }) => theme.colorMode};
    background-color: ${({ theme }) => theme.bgMode};
    border: 2px solid ${({theme}) => theme.colorMode};
    position: absolute; 
    top: 15px; 
    right: 60px; 
    padding: 7px 20px;
    border-radius: 5px; 
    font-weight: 900; 
    font-size: 15px;
  }
`;
