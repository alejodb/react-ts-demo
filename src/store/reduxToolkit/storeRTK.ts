import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from './contadorSlice';
import usersReducer from './usersSlice';
import pokemonReducer from './pokemonSlice';

const loggerMiddleware = (storeAPI: { getState: () => unknown; }) => (next: (action: unknown) => unknown) => (action: unknown) => {
   console.log('%c[Middleware] Acción disparada:', 'color: #bada55; font-weight: bold', action);
  
  const resultado = next(action); // Enviamos la acción al siguiente middleware o al reducer
  
  console.log('%c[Middleware] Nuevo estado:', 'color: #ff9800; font-weight: bold', storeAPI.getState());
  return resultado;
};

// Configuración del store
export const storeRTK = configureStore({
  reducer: {
    contador: contadorReducer,
    users: usersReducer,
    pokemon: pokemonReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});

// Tipos
export type RootStateRTK = ReturnType<typeof storeRTK.getState>;
export type AppDispatchRTK = typeof storeRTK.dispatch;