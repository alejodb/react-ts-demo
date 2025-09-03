import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import "./App.css";
import Perfil from "./pages/Perfil";

const AppRedux = lazy(() => import("./pages/AppRedux"));
const AppRTK = lazy(() => import("./pages/AppRTK"));
const AppBase = lazy(() => import("./pages/AppBase"));
const Login = lazy(
  () =>
    new Promise<{ default: typeof import("./pages/Login").default }>(
      (resolve) =>
        setTimeout(
          () =>
            import("./pages/Login").then((module) =>
              resolve({ default: module.default })
            ),
          2000
        )
    )
);

// Componente interno que usa useLocation
function AppContent() {
  const isAuth = false;
  
  return (
    <div className="app-container">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/app">Ejemplos básicos</Link>
        <Link to="/appRedux">Ejemplos Redux</Link>
        <Link to="/appRTK">Ejemplos RTK</Link>
        <Link to="/login">Login</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
      <div className="main-content">
        <Suspense
          fallback={
            <div className="suspense-fallback">Cargando página...</div>
          }
        >
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
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;