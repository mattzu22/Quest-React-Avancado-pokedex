export interface DetailsPokemonsProps {
    name: string;
    image: string;
    types: string[];
  }

export interface DetailsPokemonProps {
    name: string;
    types: string[];
    stats: {
        nameStats: string;
        baseStats: string;
    }[];
    image: string;
    id: string;
    moves: {
        move: { name: string };
        name: string;
        url: string;
    }[];
    abilities: {
        nameAbility: string;
        effect: { effect: string }[];
    }[];
  }
