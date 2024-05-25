import React from "react"

import "./PokemonCard.scss"
import { Link } from "react-router-dom"
import Loader from "react-js-loader";
import { usePokemon } from "../../hooks/usePokemons";

interface PokemonCardProps {
    url: string
} 

export const PokemonCard = ({url}:PokemonCardProps) => {
    const { pokemon} = usePokemon(url);

    const reformatId = (id: string| undefined, length: number): string | undefined => {
        if (id)
            return (id.length < length) ? reformatId("0" + id, length) : "#" + id
    }

    return (
        <Link to={`/pokemon/${pokemon?.id}`} className="pokemon-card">
          <div className="pokemon-card--top">
            <span className="pokemon-card--top-id">{reformatId(pokemon?.id.toString(), 3)}</span>
            {pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default ? (
              <img
                className="pokemon-card--top-img"
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  pokemon?.sprites?.front_default
                }
                alt={pokemon?.name}
              />
            ) : (
              <div>
                <Loader type="box-up" size={100} color="#000000"/>
              </div>
            )}

          </div>
          <div className="pokemon-card--name">
                {pokemon?.name}
        </div>

        </Link>
      );
}