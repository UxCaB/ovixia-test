import React from "react";
import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/BackgroundByTypes";
import Loader from "react-js-loader";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Chip, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import HeightIcon from '@mui/icons-material/Height';
import "./PokemonInfo.scss"

interface PokemonInfoProps {
    pokemon: IPokemon | null;
}

export const PokemonInfo = ({pokemon} : PokemonInfoProps) => {
    /* @ts-ignore */
    const backgroundColor = background[pokemon?.types[0]?.type?.name]
    const maxStat = 255;
    const navigate = useNavigate();
    if (!pokemon) {
        return (
            <div>
                <Loader />
            </div>
        )
    }

    return(
        <div>
            <header>
                <div>
                    <IconButton onClick={() => navigate("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <span>{pokemon?.name}</span>
                </div>
                <p>#{pokemon?.id}</p>
            </header>
            <div>
                <img 
                    src={
                        pokemon?.sprites?.front_default ||
                        pokemon?.sprites?.other?.dream_world?.front_default
                    }
                    alt={pokemon?.name}
                />
                <div>
                    {pokemon?.types.map(({type: {name}}) => (
                        /* @ts-ignore */
                        <Chip label={name} style={{background: background[name]}}/>
                    ))}
                </div>
                <div>
                    <div>
                        <MonitorWeightIcon />
                        <span>{pokemon?.weight} </span>
                    </div>
                    <div>
                        <HeightIcon />
                        <span>{pokemon?.height} </span>
                    </div>
                    <div>
                        <span>Habilities</span>
                        {pokemon?.abilities.map(({ability: {name}}) => (
                        /* @ts-ignore */
                        <Chip label={name} />
                    ))}
                    </div>
                </div>
                <div>
                    {/* @ts-ignore */
                    pokemon?.stats?.map(({ base_stat, stat: {name}}) => {
                        return (
                            <div>
                                <span>{name}</span>
                                <div className="styles-line">
                                    <p>0{base_stat}</p>
                                    <div className="styles-line--primary" style={{ background: backgroundColor}}/>
                                    <div  className="styles-line--secondary" style={{ background: backgroundColor, opacity: 1, width: `${(base_stat / maxStat)* 100}%`}}/>
                                </div>

                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}