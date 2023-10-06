import {
  StyleCardPokemon,
  InfoPokemonTop,
  InfoPokemonBottom,
  PokeDetails,
  Navegation,
  InfoPokemon,
} from "./style";

import { showColorPokemon } from "../../App";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ThemeContext, ThemeContextType } from "../../context";

import Header from "../Header";

import { AiOutlineRollback } from "react-icons/ai"

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

export function PokemonsDetails() {
  const [detailsPokemon, setDetailsPokemon] = useState<DetailsPokemonProps | undefined>(undefined);
  const [showMenu, setShowMenu] = useState("status");

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const { pokemon } = useParams();

  async function getDataPokemon(pokemon: string | undefined) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const listPokemons = await response.json();

    const dataDetailsPokemon: DetailsPokemonProps = await getDetailsPokemon(listPokemons);

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

    const infoStats = dataPokemon.stats.map(
      (stat: { stat: { name: string }; base_stat: string }) => {
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
    <>
      <Header getDataPokemon={getDataPokemon}/>

      <StyleCardPokemon>
        <Link className="back" to={`/`}>
          <AiOutlineRollback className="back-icon"/>
        </Link>
        
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
                    className={showMenu == "status" ? "selecionado" : ""}
                    onClick={() => setShowMenu("status")}
                  >
                    Status
                  </li>
                  <li
                    className={showMenu == "moves" ? "selecionado" : ""}
                    onClick={() => setShowMenu("moves")}
                  >
                    Moves
                  </li>
                  <li
                    className={showMenu == "abilities" ? "selecionado" : ""}
                    onClick={() => setShowMenu("abilities")}
                  >
                    Abilities
                  </li>
                </ul>
              </Navegation>

              <InfoPokemon>
                {showMenu == "status" ? (
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

                {showMenu == "moves" ? (
                  <div className="info-poke">
                    <h3>Moves</h3>

                    <ul>
                      {detailsPokemon?.moves.map((move) => (
                        <li key={move.name}>{move.move.name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {showMenu == "abilities" ? (
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
    </>
  );
}
