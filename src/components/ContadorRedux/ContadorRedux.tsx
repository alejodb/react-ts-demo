import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store/reduxPuro";

function ContadorRedux() {
  // Selector: obtiene valor del store
  const valor = useSelector((state: RootState) => state.valor);
  
  // Dispatch: dispara acciones
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Valor: {valor}</h1>
      <button onClick={() => dispatch({ type: "incrementar" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>-1</button>
      <button onClick={() => dispatch({ type: "incrementarEn", payload: 5 })}>
        +5
      </button>
    </div>
  );
}

export default ContadorRedux;