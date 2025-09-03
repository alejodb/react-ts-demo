import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatchRTK, RootStateRTK } from '../../store/reduxToolkit/storeRTK';
import { incrementar, decrementar, incrementarEn, reiniciar } from '../../store/reduxToolkit/contadorSlice';

export default function AppRTK() {
  const valor = useSelector((state: RootStateRTK) => state.contador.valor);
  const dispatch = useDispatch<AppDispatchRTK>();

  return (
    <div style={{ border: '2px solid green', padding: '1rem', margin: '1rem' }}>
      <h2>Contador - Redux Toolkit</h2>
      <p>Valor: {valor}</p>
      <button onClick={() => dispatch(incrementar())}>+1</button>
      <button onClick={() => dispatch(decrementar())}>-1</button>
      <button onClick={() => dispatch(incrementarEn(5))}>+5</button>
      <button onClick={() => dispatch(reiniciar())}>Reiniciar</button>
    </div>
  );
}