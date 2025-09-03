import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null
};

// Thunk asíncrono para obtener pokemons
export const fetchPokemons = createAsyncThunk<Pokemon[]>(
  'pokemon/fetchAll',
  async () => {
    const res = await axios.get<{ results: Pokemon[] }>(
      'https://pokeapi.co/api/v2/pokemon?limit=10'
    );
    return res.data.results;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action: PayloadAction<Pokemon[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al obtener Pokémon';
      });
  }
});

export default pokemonSlice.reducer;