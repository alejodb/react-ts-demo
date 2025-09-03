// Estado inicial tipado
interface ContadorState {
  valor: number;
}

const estadoInicial: ContadorState = {
  valor: 0
};

// Reducer puro
export function contadorReducer(
  state = estadoInicial,
  action: { type: string; payload?: number }
): ContadorState {
  switch (action.type) {
    case "incrementar":
      return { valor: state.valor + 1 };
    case "decrementar":
      return { valor: state.valor - 1 };
    case "incrementarEn":
      return { valor: state.valor + (action.payload ?? 0) };
    default:
      return state;
  }
}