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
  stats: string[];
  image: string;
  id: string;
  moves: string[];
  abilities: string[];
}

export function PokemonsDetails() {
  const [detailsPokemon, setDetailsPokemon] = useState<DetailsPokemonProps>();
  const [menu, setMenu] = useState("status");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  async function getDataPokemon(pokemon: any) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const json = await response.json();
    const detailsPokemon = await getDetailsPokemon(json);

    setDetailsPokemon(detailsPokemon);
  }

  async function getDetailsPokemon(dataPokemon: any) {
    const types = dataPokemon.types.map((type: any) => type.type.name);

    const urlAbilitiesPromises = dataPokemon.abilities.map(
      async (ability: any) => {
        const urlAbilities = ability.ability.url;
        const response = await fetch(urlAbilities);
        const json = await response.json();

        return {
          nameAbility: ability.ability.name,
          effect: json.effect_entries.filter(
            (entry: any) => entry.language.name === "en"
          ),
        };
      }
    );

    const infoStats = dataPokemon.stats.map((stat: any) => {
      const nameStats = stat.stat.name;
      const baseStats = stat.base_stat;
      return { nameStats, baseStats };
    });

    const { moves } = dataPokemon;
    const movesSelect = moves.slice(0, 4);

    return Promise.all(urlAbilitiesPromises).then((res) => {
      return {
        name: dataPokemon.name,
        types: types,
        stats: infoStats,
        image: dataPokemon.sprites.front_default,
        id: dataPokemon.id,
        moves: movesSelect,
        abilities: res,
      };
    });
  }

  const colorPokemon = showColorPokemon(detailsPokemon?.types.join("-"));

  useEffect(() => {
    getDataPokemon(pokemon);
  }, []);

  return (
    <StyleCardPokemon>
      <div
        className="container-card-pokemon"
        style={{ background: colorPokemon }}
      >
        <InfoPokemonTop theme={theme}>
          <div className="name-type">
            <h2 className="name">{detailsPokemon?.name}</h2>
            <div className="types">
              {detailsPokemon?.types.map((type) => (
                <span
                  className="type"
                  style={{ background: colorPokemon }}
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
                <li className="selecionado" onClick={() => setMenu("status")}>
                  Status
                </li>
                <li onClick={() => setMenu("moves")}>Moves</li>
                <li onClick={() => setMenu("abilities")}>Abilities</li>
              </ul>
            </Navegation>

            <InfoPokemon>
              {menu == "status" ? (
                <div className="info-poke">
                  <h3>Status</h3>

                  <ul className="info-status">
                    {detailsPokemon?.stats.map((stat, index) => {
                      return (
                        <li key={index}>
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
                    {detailsPokemon?.moves.map((move, index) => (
                      <li key={index}>{move.move.name}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {menu == "abilities" ? (
                <div className="abilities info-poke">
                  <h3>Abilities</h3>

                  <ul>
                    {detailsPokemon?.abilities.map((ability, index) => (
                      <li key={index}>
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
