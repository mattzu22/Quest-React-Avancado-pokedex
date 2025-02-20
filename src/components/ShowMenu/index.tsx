import { DetailsPokemonProps } from "../../interfaces/config"

interface MenuCardPokemon{
 showMenu: string;
 detailsPokemon: DetailsPokemonProps | undefined;
}


export const MenuCardPokemon = ({ showMenu, detailsPokemon }: MenuCardPokemon) => {
    return (
        <>
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
                            <li key={move.move.name}>{move.move.name}</li>
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
       </>
    )
}
