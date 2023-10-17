import logo from "../../../public/images/pokedex-3d-logo.png"

import * as Styled from "./style";
import { Search } from "../Search";

import { DetailsPokemonsProps } from "../../interfaces/config";
import { Link } from "react-router-dom";

interface PropsHeader{
  setDetailsPokemons?: React.Dispatch<React.SetStateAction<DetailsPokemonsProps[]>>
  getDetailsPokemon?: (pokemon: string | undefined) => Promise<void>
}

export function Header({ setDetailsPokemons, getDetailsPokemon }: PropsHeader) {
  return (
    <Styled.Header >
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      
      <Search 
       setDetailsPokemons={setDetailsPokemons}
       getDetailsPokemon={getDetailsPokemon}
      />
    </Styled.Header>
  );
}
