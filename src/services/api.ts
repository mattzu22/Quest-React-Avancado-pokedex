

export const fetchPokemonsList = async (offset: number) => {
  try {
    const urlBase: string = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
    const response: Response = await fetch(urlBase);
    const json = await response.json();
    const { results } = json;
    const pokemonsDetails = results.map((data: { name: string }) => getPokemonsInfo(data.name))

    return await Promise.all(pokemonsDetails)
  } catch (error) {
    console.error("Erro ao buscar os Pokémon:", error);
  }
};

export async function getPokemonsInfo(pokemon: string | undefined) {
  const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokemonDetails = await url.json();

  const types: string[] = pokemonDetails.types.map(
    (type: { type: { name: string } }) => type.type.name
  );

  const urlAbilitiesPromises = pokemonDetails.abilities.map(
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

  const infoStats = pokemonDetails.stats.map(
    (stat: { stat: { name: string }; base_stat: string }) => {
      const nameStats = stat.stat.name;
      const baseStats = stat.base_stat;
      return { nameStats, baseStats };
    }
  );

  const { moves } = pokemonDetails;
  const movesSelect = moves.slice(0, 4);

  return Promise.all(urlAbilitiesPromises).then((res) => {
    return {
      name: pokemonDetails.name,
      types: types,
      stats: infoStats,
      image: pokemonDetails.sprites.front_default,
      id: pokemonDetails.id,
      moves: movesSelect,
      abilities: res,
    };
  });
}

