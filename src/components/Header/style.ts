import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  img{
    max-width: 250px;
  }

  @media (max-width: 750px) {
    &{
      flex-direction: column;
      gap: 30px;
    }
  }
`
