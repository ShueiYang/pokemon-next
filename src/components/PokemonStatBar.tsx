"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { POKEMON_TYPE } from "@/constants/typeVariant";

interface PokemonStatProps {
  stats: number;
  type: string;
}

const PokemonStatBar: React.FC<PokemonStatProps> = ({ stats, type }) => {
  const [progress, setProgress] = useState<number>(0);

  // delay the stat value to animate the progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      const percentage = Math.round((stats / 150) * 100);
      setProgress(percentage);
    }, 500);

    return () => clearTimeout(timer);
  }, [stats]);

  return (
    <Progress
      className="w-1/2"
      colorType={`${POKEMON_TYPE[type].color}`}
      value={progress}
    />
  );
};

export default PokemonStatBar;
