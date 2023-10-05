import {
  StyleCardPokemon,
  InfoPokemonTop,
  InfoPokemonBottom,
  PokeDetails,
  Navegation,
  InfoPokemon,
} from "./style";
import { showColorPokemon } from "../../App";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context";

interface DetailsPokemonProps {
  name: string;
  types: string[];
  stats: {
    nameStats: string;
    baseStats: string;
  }[];
  image: string;
  id: string;
  moves: {
    move: any;
    name: string;
    url: string;
  }[];
  abilities: {
    nameAbility: string;
    effect: { effect: string }[];
  }[];
  colorPokemon: string;
}

interface PropsAbilities {
  nameAbility: string;
  effect: string;
}

export function PokemonsDetails() {
  const [detailsPokemon, setDetailsPokemon] = useState<DetailsPokemonProps | undefined>(undefined);
  const [menu, setMenu] = useState("status");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  async function getDataPokemon(pokemon: string | undefined) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const json = await response.json();

    const dataDetailsPokemon: DetailsPokemonProps = await getDetailsPokemon(json);

    setDetailsPokemon(dataDetailsPokemon);
  }

  async function getDetailsPokemon(dataPokemon: Record<string, any>) {
    const types: string[] = dataPokemon.types.map(
      (type: { type: { name: string } }) => type.type.name
    );

    const urlAbilitiesPromises = dataPokemon.abilities.map(
      async (ability: { ability: { name: string; url: string } }) => {
        const urlAbilities = ability.ability.url;
        const response = await fetch(urlAbilities);
        const json = await response.json();

        return {
          nameAbility: ability.ability.name,
          effect: json.effect_entries.filter(
            (entry: { language: { name: string } }) =>
              entry.language.name === "en"
          ),
        };
      }
    );

    console.log(urlAbilitiesPromises);
    

    const infoStats = dataPokemon.stats.map(
      (stat: { stat: { name: string }; base_stat: string }) => {
        console.log(stat);

        const nameStats = stat.stat.name;
        const baseStats = stat.base_stat;
        return { nameStats, baseStats };
      }
    );

    const { moves } = dataPokemon;
    const movesSelect = moves.slice(0, 4);

    const colorPokemon = showColorPokemon(types.join("-"));

    return Promise.all(urlAbilitiesPromises).then((res) => {
      return {
        name: dataPokemon.name,
        types: types,
        stats: infoStats,
        image: dataPokemon.sprites.front_default,
        id: dataPokemon.id,
        moves: movesSelect,
        abilities: res,
        colorPokemon: colorPokemon,
      };
    });
  }

  useEffect(() => {
    getDataPokemon(pokemon);
  }, []);

  return (
  
      <StyleCardPokemon>
        <div
          className="container-card-pokemon"
          style={{ background: detailsPokemon?.colorPokemon }}
        >
          <InfoPokemonTop theme={theme}>
            <div className="name-type">
              <h2 className="name">{detailsPokemon?.name}</h2>
              <div className="types">
                {detailsPokemon?.types.map((type) => (
                  <span
                    className="type"
                    style={{ background: detailsPokemon?.colorPokemon }}
                    key={type}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <p className="number">#0{detailsPokemon?.id}</p>

            <button className="btn-shiny"></button>
          </InfoPokemonTop>

          <InfoPokemonBottom theme={theme}>
            <div className="img-pokemon">
              <img src={detailsPokemon?.image} />
            </div>

            <PokeDetails theme={theme}>
              <Navegation>
                <ul>
                  <li
                    className={menu == "status" ? "selecionado" : ""}
                    onClick={() => setMenu("status")}
                  >
                    Status
                  </li>
                  <li
                    className={menu == "moves" ? "selecionado" : ""}
                    onClick={() => setMenu("moves")}
                  >
                    Moves
                  </li>
                  <li
                    className={menu == "abilities" ? "selecionado" : ""}
                    onClick={() => setMenu("abilities")}
                  >
                    Abilities
                  </li>
                </ul>
              </Navegation>

              <InfoPokemon>
                {menu == "status" ? (
                  <div className="info-poke">
                    <h3>Status</h3>

                    <ul className="info-status">
                      {detailsPokemon?.stats.map((stat) => {
                        return (
                          <li key={stat.nameStats}>
                            {stat.nameStats}: {stat.baseStats}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}

                {menu == "moves" ? (
                  <div className="info-poke">
                    <h3>Moves</h3>

                    <ul>
                      {detailsPokemon?.moves.map((move) => (
                        <li key={move.name}>{move.move.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {menu == "abilities" ? (
                  <div className="abilities info-poke">
                    <h3>Abilities</h3>

                    <ul>
                      {detailsPokemon?.abilities.map((ability) => (
                        <li key={ability.nameAbility}>
                          <span>{ability.nameAbility}</span>:{" "}
                          {ability.effect[0].effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </InfoPokemon>
            </PokeDetails>
          </InfoPokemonBottom>
        </div>
      </StyleCardPokemon>
  );
}
