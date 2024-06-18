import React, { useMemo } from "react";
import { UseGetPokemon } from "../../hooks/UseGetPokemon";
import { PokemonListITem } from "../../interfaces/PokemonListItem";
import { GetMainPokemonTypes } from "../../utils/GetMainPokemonTypes";
import { Label } from "../shared/label/Label";
import { CapitalizerFirtsLetter } from "../../utils/CapitalizerFirtsLetter";

interface PokemonCardProps{
    pokemon?: PokemonListITem;
    pokemonId?: number;
}

const PokemonCard: React.FC <PokemonCardProps>= ({pokemon, pokemonId}) =>{
    const {pokemonData} = UseGetPokemon(pokemon?.name, pokemonId)
    const mainType= useMemo(()=>pokemonData && GetMainPokemonTypes(pokemonData),[pokemonData])
    
    return (
        <div className={`${mainType}-background w-56 h-56 rounded-lg shadow-lg p-4 `}>
            <div className="flex flex-col items-center mx-auto">
                <Label>{pokemonData?.name ? CapitalizerFirtsLetter(pokemonData?.name) : ""}</Label>
                <img 
                className="mx-auto w-40 h-40"
                src={pokemonData?.sprites?.front_default}
                alt={pokemonData?.name ?? ""}
                />
            </div>
        </div>
    )
}

export default PokemonCard