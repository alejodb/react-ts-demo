import { createStore } from "redux";
import { contadorReducer } from "./contadorReducer";

export const store = createStore(contadorReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;