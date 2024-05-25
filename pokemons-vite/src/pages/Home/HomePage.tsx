import {useEffect, useState } from "react"
import { PokemonList } from "../../components/PokemonList/PokemonList"
import "./Home.scss"
import axios from "axios"
import { PokemonIcon } from "../../assets/PokemonIcon"

export const HomePage = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
          );
          const out = await res.json();
          setPokemons(out.results);
    }
    useEffect(() => {
        getPokemons();
    },[])

    return(
        <div className="home-page">
            <div className="home-page--header">
                <PokemonIcon />
            </div>
            <PokemonList pokemonUrls={pokemons} />
        </div>
    )
}