import styled from "styled-components";

export const StyleCardPokemon = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 15px;
  animation: changer-shiny 1s ease-in-out;

  @keyframes changer-shiny {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

}
.container-card-pokemon {
  border-radius: 20px;
  width: 100%;
}
`
export const InfoPokemonTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px 35px 0 35px;
  position: relative;
  color: ${({theme})=>theme.color};
  transition: 0.2s ease-in-out;

.name-type .name {
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 800;
}

.name::first-letter {
  text-transform: uppercase;
}

.types {
  display: flex;
  gap: 5px;

  .type {
  font-size: 13px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  padding: 3px 15px;
  opacity: 0.8;
}
}

.number {
  font-size: 17px;
  font-weight: 800;
  margin-top: 12px;
}

.btn-shiny {
  position: absolute;
  right: 40px;
  top: 70px;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: rgb(232, 67, 67);
  border: 4px solid rgb(228, 224, 224);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
`

export const InfoPokemonBottom = styled.div`
img {
  max-width: 100%;
  z-index: 10;
}

.img-pokemon {
   width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

.img-pokemon:before{
  content: "";
  background: url(../../public/images/pokebola.webp) center center no-repeat;
  filter: ${({theme}) => theme.colorPokebola};
  width: 400px;
  height: 290px;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  overflow: hidden;
  position: absolute;
}
`
export const PokeDetails = styled.div`
  background-color: ${({theme}) => theme.bg};
  opacity: 0.8;
  border-radius: 50px 50px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: ${({theme}) =>theme.color};
  transition: 0.3s ease-in-out;
`

export const Navegation = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    padding-bottom: 20px;

    li {
      cursor: pointer;
      opacity: 0.5;
      font-size: 14px;
    }

    li.selecionado {
      opacity: 1;
      font-weight: bold;
      border-bottom: 2px solid rgb(86, 86, 245);
      animation: changer-menu 0.5s ease-in-out;
    }
  }

  @keyframes changer-menu {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`

export const InfoPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 45px 20px;
  height: 250px;

  .info-poke {
    animation: changer-info 0.5s ease-in-out;
  }

  @keyframes changer-info {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }

  h3{
   font-size: 23px;
   margin-bottom: 10px;
   border-bottom: 1px solid #6b727a;
  }

  ul li{
  border-bottom: 1px solid #c3c4c5;
  padding: 0 0 5px;
  margin-bottom: 3px;
  font-size: 15px;
 }
  
.abilities ul {
  height: 180px;
  overflow-y: scroll;
}
  
.poke-details .info .abilities ul {
    padding: 0 0 5px;
    margin-bottom: 3px;
    font-size: 15px;
}

.abilities ul::-webkit-scrollbar {
  width: 5px;
}

.abilities ul::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 10px;
  width: 5px;
}

.abilities ul li span {
  font-weight: 700;
  font-size: 16px;
}
`











