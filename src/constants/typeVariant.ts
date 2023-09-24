type VariantType = {
  [key: string]: {
    type: number;
    color: string;
  };
};

export const POKEMON_TYPE: VariantType = {
  normal: {
    type: 1,
    color: "bg-[#ffffff]",
  },
  fighting: {
    type: 2,
    color: "bg-[#a2ab58]",
  },
  flying: {
    type: 3,
    color: "bg-[#c6ffdd]",
  },
  poison: {
    type: 4,
    color: "bg-[#e0a7f6]",
  },
  ground: {
    type: 5,
    color: "bg-[#ca8a04]",
  },
  rock: {
    type: 6,
    color: "bg-[#9a8478]",
  },
  bug: {
    type: 7,
    color: "bg-[#ffe5bd]",
  },
  ghost: {
    type: 8,
    color: "bg-[#abbaab]",
  },
  steel: {
    type: 9,
    color: "bg-[#9bc5c3]",
  },
  fire: {
    type: 10,
    color: "bg-[#fb923c]",
  },
  water: {
    type: 11,
    color: "bg-[#529ed4]",
  },
  grass: {
    type: 12,
    color: "bg-[#6fec6a]",
  },
  electric: {
    type: 13,
    color: "bg-[#fde047]",
  },
  psychic: {
    type: 14,
    color: "bg-[#73C8A9]",
  },
  ice: {
    type: 15,
    color: "bg-[#91EAE4]",
  },
  dragon: {
    type: 16,
    color: "bg-[#fbd786]",
  },
  dark: {
    type: 17,
    color: "bg-[#547b8f]",
  },
  fairy: {
    type: 18,
    color: "bg-[#ffc0cb]",
  },
};
