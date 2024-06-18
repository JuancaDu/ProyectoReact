import { Query, useQuery } from "@tanstack/react-query";
import { BaseUrl } from "../constants/Url";
import { pokemonData } from "../interfaces/PokemonData";

export const UseGetPokemon = (pokemonName?: string, pokemonId?: number) => {
    const { data: pokemonData, isLoading, error } = useQuery<pokemonData>({
        queryKey: ['pokemon', pokemonName, pokemonId],
        queryFn: async () => {
            const response = await fetch(`${BaseUrl}pokemon/${pokemonName ?? pokemonId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            return data;
        }
    })

    return {
        pokemonData,
        isLoading,
        error: error?.message ?? null
    }
}