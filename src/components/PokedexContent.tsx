"use client";

import { Pokemon } from "@/data.types";
import { usePokemonStore } from "@/hooks/pokemonStore";
import SearchBar from "@/components/SearchBar";
import PokemonList from "@/components/PokemonList";

interface PokedexContentProps {
  pokemonDatas: Pokemon[];
}

export default function PokedexContent({ pokemonDatas }: PokedexContentProps) {
  // Zustand custom hook
  const searchName = usePokemonStore((state) => state.searchName);

  // function filter the pokemonlist
  function searchFilter(datas: Pokemon[]) {
    return datas.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchName.toLowerCase()),
    );
  }

  const filteredPokemonList = searchFilter(pokemonDatas);

  return (
    <main>
      <SearchBar />
      <PokemonList pokemonList={filteredPokemonList} />
    </main>
  );
}
