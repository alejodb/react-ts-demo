import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import Perfil from "./pages/Perfil";

const AppRedux = lazy(() => import("./pages/AppRedux"));
const AppRTK = lazy(() => import("./pages/AppRTK"));
const AppBase = lazy(() => import("./pages/AppBase"));

function App() {
  const isAuth = false;
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/app">Ejemplos básicos</Link>
          <Link to="/appRedux">Ejemplos Redux</Link>
          <Link to="/appRTK">Ejemplos RTK</Link>
          <Link to="/login">Login</Link>
          <Link to="/perfil">Perfil</Link>
        </nav>
      </div>
      <div className="main-content">
         <Suspense fallback={<p>Cargando página...</p>}>
          <Routes>
            <Route path="/app" element={<AppBase />} />
              <Route path="/appRedux" element={<AppRedux />} />
             <Route path="/appRTK" element={<AppRTK />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/perfil"
              element={
                <PrivateRoute isAuth={isAuth}>
                  <Perfil />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
