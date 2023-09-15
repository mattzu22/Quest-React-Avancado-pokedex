import { useContext } from "react";
import { CartaoPokemon } from "./style";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeContext } from "../../context";
import { ThemeContextType } from "../../context";

interface PropsDetailsPokemons {
  name: string;
  image: string;
  types: string[];
  bgCard: string;
  colorType: string;
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
          style={{ background: pokemon.bgCard }}
          theme={theme}
        >
          <a className="card-image" href="#">
            <img src={pokemon.image} alt={pokemon.name} />
          </a>

          <div className="details">
            <h2 className="name">{pokemon.name}</h2>

            <div className="types">
              {pokemon.types.map((type) => (
                <p
                  className="type"
                  style={{ background: pokemon.colorType }}
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
