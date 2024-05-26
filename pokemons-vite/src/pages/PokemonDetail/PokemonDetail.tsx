import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { PokemonInfo } from "../../components/PokemonInfo/PokemonInfo";
import { IPokemon } from "../../interfaces/interfaces";

export const PokemonDetail = () => {
    const {pokeId} = useParams();

    const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

    const fetchPokemon = async () => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        );
        const out = await res.json();
        setPokemon(out);
        console.log(out)
      }
  
    useEffect(() => {
      fetchPokemon();
    }, []);

    return (
      <div>
      {pokemon !== undefined && pokemon !==null ?
                <PokemonInfo pokemon={pokemon} />
                :
                <div>Loading...</div>
            }
        </div>
    )
}