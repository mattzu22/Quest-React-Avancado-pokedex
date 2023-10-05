import { useContext } from "react";
import { CartaoPokemon } from "./style";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";
import { Link } from "react-router-dom";
import { ImgPokemon } from "../PokemonImg";

interface PropsDetailsPokemons {
  name: string;
  img: string;
  types: string[];
  colorPokemon: string;
}

export default function CardPokemon({name, img, types, colorPokemon}: PropsDetailsPokemons) {
  
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <CartaoPokemon
      key={name}
      style={{ background: colorPokemon }}
      theme={theme}
    >
      <Link className="card-image" to={`/pokemon/${name}`}>
        <ImgPokemon src={img} alt={name} />
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
    </CartaoPokemon>
  );
}
