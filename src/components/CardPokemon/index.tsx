import { CartaoPokemon } from "./style";

interface PropsDetailsPokemons {
    name: string,
    image: string,
    types: string[],
    bgCard: string;
    colorType: string;
};
interface PropsCardPokemon {
  detailsPokemons: PropsDetailsPokemons[];
}

export default function CardPokemon({ detailsPokemons }: PropsCardPokemon ) {
  
  return (
    <>
      {detailsPokemons.map((pokemon) => {
        return (
          <CartaoPokemon key={pokemon.name} style={{background: pokemon.bgCard}}>
            <a className="card-image" href="#">
              <img src={pokemon.image} alt={pokemon.name} />
            </a>

            <div className="details">
              <h2 className="name">{pokemon.name}</h2>
              <div className="types">
                {pokemon.types.map((type) => {
                  return <p className="type" style={{background: pokemon.colorType}} key={type}>{type}</p>;
                })}
              </div>
            </div>
          </CartaoPokemon>
        );
      })}
    </>
  );
}
