import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootStateRTK, AppDispatchRTK } from '../../store/reduxToolkit/storeRTK';
import { fetchPokemons } from '../../store/reduxToolkit/pokemonSlice';

export default function PokemonList() {
  const { data, loading, error } = useSelector((state: RootStateRTK) => state.pokemon);
  const dispatch = useDispatch<AppDispatchRTK>();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (loading) return <p>Cargando Pokémon...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h3>Pokédex</h3>
      <ul>
        {data.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name} - <a href={pokemon.url} target="_blank" rel="noreferrer">Detalles</a>
          </li>
        ))}
      </ul>
    </div>
  );
}