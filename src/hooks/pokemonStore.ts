import { create } from "zustand";

// define types for state values and action
type PokemonStore = {
  value: string;
  searchName: string;
  setValue: (state: string) => void;
  setSearchName: (state: string) => void;
  reset: () => void;
};

// define intial state
const initialState = {
  value: "",
  searchName: "",
};

// create Store
export const usePokemonStore = create<PokemonStore>((set) => ({
  ...initialState,
  setValue: (newValue) => set({ value: newValue }),
  setSearchName: (pokemonName) => set({ searchName: pokemonName }),
  // reset all state at once
  reset: () => set(initialState),
}));
