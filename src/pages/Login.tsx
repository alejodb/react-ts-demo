import { useEffect, useState } from "react";

function Login() {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    // Simulamos trabajo pesado con un delay artificial
    const timer = setTimeout(() => {
      setData("Contenido cargado después de trabajo pesado 💪");
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Página Pesada Login</h2>
      {data ? <p>{data}</p> : <p>Procesando datos...</p>}
    </div>
  );
}

export default Login;
