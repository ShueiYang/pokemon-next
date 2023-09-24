"use client";

import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { usePokemonStore } from "@/hooks/pokemonStore";

export default function SearchBar() {
  // Zustand custom hook
  const [searchName, setSearchName] = usePokemonStore((state) => [
    state.searchName,
    state.setSearchName,
  ]);

  return (
    <div className="px-4 mb-12">
      <h2 className="text-2xl pt-8 pb-4 text-center text-gold">
        Search your Pokemon!
      </h2>
      <div className="flex flex-col w-full max-w-sm gap-1.5 mx-auto">
        <Label htmlFor="pokemonName" className="text-base text-gold">
          Name
        </Label>
        <div className="relative">
          <Search className="absolute left-2 top-0 bottom-0 m-auto h-5 w-5 opacity-60" />
          <Input
            className="pl-8"
            type="text"
            id="pokemonName"
            placeholder="Search pokemon by name..."
            value={searchName}
            onChange={(event) => setSearchName(event.target.value)}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
