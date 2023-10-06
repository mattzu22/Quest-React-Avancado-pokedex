import logo from "../../../public/images/pokedex-3d-logo.png"

import * as Styled from "./style";
import { Search } from "../Search";  
import { SetStateAction } from "react";

interface DetailsPokemonsProps {
  name: string;
  image: string;
  types: string[];
  colorPokemon: string;
}
interface PropsHeader{
  setDetailsPokemons?: (value: React.SetStateAction<DetailsPokemonsProps[]>) => void
  getDetailsPokemon?: (offset: number) => void
  getDataPokemon?: (pokemon: string) => void
}

export default function Header({ setDetailsPokemons, getDetailsPokemon, getDataPokemon }: PropsHeader) {
  return (
    <Styled.Header >
      <img src={logo} alt="logo" />

      <Search 
       setDetailsPokemons={setDetailsPokemons}
       getDetailsPokemon={getDetailsPokemon}
       getDataPokemon={getDataPokemon}
      />
    </Styled.Header>
  );
}
