import { useState, useRef } from "react";

const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // Valor persistente durante la vida del componente

  // Incrementamos la cuenta de renders manualmente
  renderCount.current += 1;

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Rendered: {renderCount.current} times</p> {/* Mostramos el valor de ref */}
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default RenderCounter;