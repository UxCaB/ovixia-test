import React from "react"

import "./PokemonList.scss"
import { PokemonCard } from "../PokemonCard"
import { IResult } from "../../interfaces/interfaces"

interface PokemonListProps {
    pokemonUrls?: IResult[] | null
    page?: number | null
    perPage?: number |null
} 

export const PokemonList = ({pokemonUrls, page, perPage}:PokemonListProps) => {
    return(
        <div className="pokemon-list">
            {
                pokemonUrls?.map((pokemonUrl) => <PokemonCard url={pokemonUrl.url} />)
            }
        </div>
    )
}