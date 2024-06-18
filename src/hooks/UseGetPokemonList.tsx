import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BaseUrl } from "../constants/Url";
import { PokemonListITem } from "../interfaces/PokemonListItem";


interface PokemonList{
    count: number;
    next: string| null;
    previous: string | null;
    results: PokemonListITem[];
}

export const UseGetPokemonList = () => {
    const [url,setUrl] = useState(`${BaseUrl}pokemon?limit=36`);

    const { data, isLoading, error} = useQuery <PokemonList>({
        queryKey: ['pokemonList',url],
        queryFn: async() =>{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Network was not ok')
            }
            return response.json()
        } 
    })
    const goToNextPage = () =>{
        if(data?.next){
            setUrl(data.next)
        }
    }
    const goToPreviousPage = () =>{
        if(data?.previous){
            setUrl(data.previous)
        }
    }

    return{
        pokemonList: data?.results ?? [],
        isLoading,
        error: error?.message ?? null,
        goToNextPage: data?.next ? goToNextPage : undefined,
        goToPreviousPage: data?.previous ? goToPreviousPage :undefined
    }
}