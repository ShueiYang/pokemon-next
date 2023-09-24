import { Fragment } from "react";
import { Pokemon } from "@/data.types";
import PokemonCard from "@/components/PokemonCard";

interface PokemonListProps {
  pokemonList: Pokemon[];
}

const PokemonList = ({ pokemonList }: PokemonListProps) => {
  if (pokemonList.length === 0) {
    return (
      <h1 className="text-gold my-20 text-2xl text-center">
        Results not found.
      </h1>
    );
  }
  return (
    <>
      <span className="container text-gold text-2xl flex justify-end">
        {`Count: ${pokemonList.length}`}
      </span>
      <section className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 my-12">
        {pokemonList.map((pokemon) => {
          const imageUrl =
            pokemon.sprites.other?.dream_world.front_default ||
            pokemon.sprites.front_default;

          return (
            <Fragment key={pokemon.id}>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                image={imageUrl}
                type={pokemon.types[0].type.name}
                type2={pokemon.types[1] && pokemon.types[1].type.name}
              />
            </Fragment>
          );
        })}
      </section>
    </>
  );
};

export default PokemonList;
