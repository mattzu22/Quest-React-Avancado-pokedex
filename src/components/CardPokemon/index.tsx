import { useContext } from "react";
import * as Styled from "./style";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";
import { Link } from "react-router-dom";

import {DetailsPokemonsProps} from "../../interfaces/config"


export function CardPokemon({name, image , types, colorPokemon}: DetailsPokemonsProps) {
  
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <Styled.CartaoPokemon
      key={name}
      style={{ background: colorPokemon }}
      theme={theme}
    >
      <Link className="card-image" to={`/pokemon/${name}`}>
        <img src={image} alt={name} />
      </Link>

      <div className="details">
        <h2 className="name">{name}</h2>

        <div className="types">
          {types.map((type) => (
            <p className="type" style={{ background: colorPokemon }} key={type}>
              {type}
            </p>
          ))}
        </div>
      </div>
    </Styled.CartaoPokemon>
  );
}
