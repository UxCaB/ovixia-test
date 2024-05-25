import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";

export const usePokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const fetchPokemon = async () => {
    if (url) {
      //console.log(url);
      const res = await fetch(url);
      const out = await res.json();
      //console.log(out)
      setPokemon(out);
    } else if (id) {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const out = await res.json();
      setPokemon(out);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };
};