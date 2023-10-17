import styled from "styled-components";

// export const StyleDiv = styled.div`
//   .btn {
//     color: ${({ theme }) => theme.colorMode};
//     background-color: ${({ theme }) => theme.bgMode};
//     border: 2px solid ${({theme}) => theme.colorMode};
//     position: absolute; 
//     top: 15px; 
//     right: 60px; 
//     padding: 7px 20px;
//     border-radius: 5px; 
//     font-weight: 900; 
//     font-size: 15px;
//   }
// `;

export const StyleDiv = styled.div`
 .btn{
  position: absolute;
 top: 20px;
 right: 20px;
 }

  .checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #111;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
  font-size: 17px;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 19px;
  height: 20px;
  position: absolute;
  left: 1px;
  top: 1px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
`;

