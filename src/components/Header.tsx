"use client";

import Image from "next/image";
import Link from "next/link";
import ComboBoxSwitcher from "@/components/ComboBox";
import { usePokemonStore } from "@/hooks/pokemonStore";
import ModeToggle from "@/components/ModeToggle";

export default function Header() {
  // Zustand custom hook
  const reset = usePokemonStore((state) => state.reset);

  return (
    <>
      <nav className="w-full h-fit p-2 md:px-6 md:py-4 flex justify-between">
        <ComboBoxSwitcher />
        <ModeToggle />
      </nav>
      <div className="flex flex-col items-center basis-1/2">
        <Link href="/" className="w-1/2 h-auto max-w-[600px]" onClick={reset}>
          <Image
            className="w-full h-full"
            src="/images/pokemon-logo.png"
            alt="pokemon logo"
            width={400}
            height={100}
            priority
          />
        </Link>
      </div>
    </>
  );
}
