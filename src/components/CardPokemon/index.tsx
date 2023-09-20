import { useContext } from "react";
import { CartaoPokemon } from "./style";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";
import { Link } from "react-router-dom";

interface PropsDetailsPokemons {
  name: string;
  image: string;
  types: string[];
  colorPokemon: string;
}
interface PropsCardPokemon {
  detailsPokemons: PropsDetailsPokemons[];
}

export default function CardPokemon({ detailsPokemons }: PropsCardPokemon) {
  
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      {detailsPokemons.map((pokemon) => (
        <CartaoPokemon
          key={pokemon.name}
          style={{ background: pokemon.colorPokemon }}
          theme={theme}
        >
          <Link className="card-image" to={`/pokemon/${pokemon.name}`}>
            <img src={pokemon.image} alt={pokemon.name} />
          </Link>

          <div className="details">
            <h2 className="name">{pokemon.name}</h2>

            <div className="types">
              {pokemon.types.map((type) => (
                <p
                  className="type"
                  style={{ background: pokemon.colorPokemon }}
                  key={type}
                >
                  {type}
                </p>
              ))}
            </div>
          </div>
        </CartaoPokemon>
      ))}
    </>
  );
}
