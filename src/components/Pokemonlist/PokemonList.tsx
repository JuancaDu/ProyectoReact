import React from 'react';
import { UseGetPokemonList } from '../../hooks/UseGetPokemonList';
import PokemonCard from '../pokemoncard/PokemonCard';
import { Grid } from '../shared/grid/Grid';

const PokemonList: React.FC = () => {
    const { pokemonList, goToNextPage, goToPreviousPage } = UseGetPokemonList();
    return (
        <div>
            <Grid goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage}>
                {pokemonList?.map((pokemon) =>
                    <PokemonCard key={pokemon?.name} pokemon={pokemon} />
                )}
            </Grid>


        </div>

    )
}

export default PokemonList;