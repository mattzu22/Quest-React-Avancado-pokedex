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
  background-color: red;
}

.info-pokemon-top .name-type .name {
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 800;
  color: white;
}

.info-pokemon-top .name-type .name::first-letter {
  text-transform: uppercase;
}

.info-pokemon-top .name-type .types {
  display: flex;
  gap: 5px;
}

.info-pokemon-top .name-type .types .type {
  font-size: 13px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 6px;
  padding: 3px 15px;
  color: white;
  opacity: 0.8;
}

.info-pokemon-top .number {
  font-size: 17px;
  font-weight: 800;
  margin-top: 12px;
  color: white;
}

.info-pokemon-top .btn-shiny {
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

.info-pokemon-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px 35px 0 35px;
  position: relative;
}

.info-bottom .img-pokemon {
  width: 100%;
  margin: 0 auto;
  height: 250px;
  object-fit: contain;
  padding: 0 15px;
  transition: 0.4s ease;
}

.info-bottom .img-pokemon img {
  width: 100%;
}

.info-bottom .poke-details .navegation ul {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  padding-bottom: 20px;
}

.info-bottom .poke-details .navegation ul li {
  cursor: pointer;
  opacity: 0.5;
  font-size: 14px;
}

.info-bottom .poke-details .navegation ul li.selecionado {
  opacity: 1;
  font-weight: bold;
  border-bottom: 2px solid rgb(86, 86, 245);
  animation: changer-menu 0.5s ease-in-out;
}

@keyframes changer-menu {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.info-bottom .poke-details {
  background-color: #ffffffc9;
  opacity: 0.8;
  border-radius: 50px 50px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.info-bottom .poke-details .info {
  display: flex;
  justify-content: space-between;
  padding: 0 45px 20px;
  height: 250px;
}

.info-bottom .poke-details .info .abilities ul {
  padding: 0 0 5px;
  margin-bottom: 3px;
  font-size: 15px;
}

.info-bottom .poke-details .info .info-poke {
  display: none;
}

.info-bottom .poke-details .info .info-poke.aberto {
  display: block;
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

.info-bottom .poke-details .info .abilities ul {
  height: 180px;
  overflow-y: scroll;
}

.info-bottom .poke-details .info .abilities ul::-webkit-scrollbar {
  width: 5px;
}

.info-bottom .poke-details .info .abilities ul::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 10px;
  width: 5px;
}

 .info-bottom .poke-details .moves h3,
 .info-bottom .poke-details .status h3,
 .info-bottom .poke-details .info .abilities h3 {
  font-size: 23px;
  margin-bottom: 10px;
  border-bottom: 1px solid #6b727a;
}

.info-bottom .poke-details .abilities ul li span {
  font-weight: 700;
  font-size: 16px;
}

.info-bottom .poke-details .moves ul li,
.info-bottom .poke-details .status ul li,
.info-bottom .poke-details .abilities ul li {
  border-bottom: 1px solid #c3c4c5;
  padding: 0 0 5px;
  margin-bottom: 3px;
  font-size: 15px;
}

`