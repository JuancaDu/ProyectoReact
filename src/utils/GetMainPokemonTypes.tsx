import { pokemonData } from "../interfaces/PokemonData";

export const GetMainPokemonTypes = (pokemon: pokemonData) =>{
   return( pokemon.types.find(type=> type.slot ===1)?.type.name)
}