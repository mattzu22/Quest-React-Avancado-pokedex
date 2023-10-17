import styled from "styled-components";
import imgPokebola from "../../../public/images/pokebola.webp"

export const CartaoPokemon = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  width: 250px;
  transition: 0.5s ease-in-out;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.color};

  .card-image img{
   max-width: 100%;
   z-index: 10;

    &:hover{
    transition: 0.4s ease-in-out ;
    transform: scale(1.1);
    }
  }

  .name {
    margin-bottom: 3px;
    margin-top: 0;
    color: ${({ theme }) => theme.color};
    transition: 0.5s ease-in-out;
  }

  .types {
    display: flex;
    gap: 10px;
  }
  
  .details .types .type {
    font-size: 13px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 6px;
    padding: 3px 15px;
    color: ${({ theme }) => theme.color};
    transition: 0.5s ease-in-out;
  }

  .details {
    display: flex;
    align-items: start;
    flex-direction: column;
    max-width: 85%;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 15px 8px;
    background-color: ${({ theme }) => theme.bg};
    transition: 0.5s ease-in-out;
    color: black;
    z-index: 10;
    position: relative;
  }

  .card-image {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

 .card-image:before {
  content: "";
  background: url(${imgPokebola}) center center no-repeat;
  filter: ${({ theme }) => theme.colorPokebola};
  display: block;
  width: 160%;
  height: 100%;
  background-size: cover;
  transition: 0.5s ease-in-out;
  opacity: 0.7;
  position: absolute;
  top: -50px;
}
`;
