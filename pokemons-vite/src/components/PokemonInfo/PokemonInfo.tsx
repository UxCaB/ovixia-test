import React from "react";
import { IPokemon } from "../../interfaces/interfaces";

interface PokemonInfoProps {
    pokemon: IPokemon
}

export const PokemonInfo = ({pokemon} : PokemonInfoProps) => {
    return(
        <div>
            <img
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  pokemon?.sprites?.front_default
                }
                alt={pokemon?.name}
            />
            <div>{pokemon?.name}</div>
            {pokemon?.types.map((value) => {
                return <div>{value.type.name}</div>
            })}
            <div>{pokemon?.weight}</div>
            <div>{pokemon?.height}</div>
            {pokemon?.abilities.map(value => {
                return <div>{value.ability.name}</div>
            })}
        </div>
    )
}