import styled from "styled-components";

export const CardsPokemonsStyle = styled.div`
 min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  .button{
    position: relative;
    margin: 40px 0 20px 0;
    width: 100%;
    cursor: pointer;
  }

  .back{
    position: absolute;
    top: 30px;
    left: 30px;

    .back-icon{
      font-size: 25px;
      color: ${({ theme }) => theme.color}
    }
  }
`;
