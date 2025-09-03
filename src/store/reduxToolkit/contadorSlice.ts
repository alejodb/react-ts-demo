import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ContadorState {
  valor: number;
}

const initialState: ContadorState = {
  valor: 0
};

export const contadorSlice = createSlice({
  name: 'contador',       // identificador del slice
  initialState,
  reducers: {
    incrementar: (state) => {
      state.valor += 1;   // gracias a Immer.js podemos mutar "como si fuera mutable"
    },
    decrementar: (state) => {
      state.valor -= 1;
    },
    incrementarEn: (state, action: PayloadAction<number>) => {
      state.valor += action.payload;
    },
    reiniciar: (state) => {
      state.valor = 0;
    }
  }
});

// Exportar las acciones automáticamente generadas
export const { incrementar, decrementar, incrementarEn, reiniciar } = contadorSlice.actions;

// Exportar el reducer para el store
export default contadorSlice.reducer;