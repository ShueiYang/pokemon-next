"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { POKEMON_TYPE } from "@/constants/typeVariant";
import { usePokemonStore } from "@/hooks/pokemonStore";

interface PokemonType {
  key: string;
  value: {
    type: number;
    color: string;
  };
}

// change POKEMON-TYPE into an array
const pokemonTypeArray: PokemonType[] = Object.entries(POKEMON_TYPE).map(
  ([key, value]) => ({
    key,
    value,
  }),
);

export default function ComboBoxSwitcher() {
  const router = useRouter();
  // Zustand custom hook
  const value = usePokemonStore((state) => state.value);
  const setValue = usePokemonStore((state) => state.setValue);

  const [open, setOpen] = useState(false);

  function onTypeSelect(pokemonType: PokemonType) {
    setOpen(false);
    setValue(pokemonType.key);
    router.push(`/type/${pokemonType.value.type}`);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[175px] justify-between"
        >
          {value
            ? pokemonTypeArray.find((pokemonType) => pokemonType.key === value)
                ?.key
            : "Select Type"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[175px] p-0">
        <Command>
          <CommandInput placeholder="Search Type..." />
          <CommandEmpty>No type found.</CommandEmpty>
          <CommandGroup>
            {pokemonTypeArray.map((pokemonType) => (
              <CommandItem
                key={pokemonType.key}
                onSelect={() => onTypeSelect(pokemonType)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === pokemonType.key ? "opacity-100" : "opacity-0",
                  )}
                />
                {pokemonType.key}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
