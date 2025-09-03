import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from '../components/Counter/Counter'
import TodoList from '../components/TodoList/TodoList'
import RenderCounter from '../components/RenderCounter/RenderCounter'
import Timer from '../components/Timer/Timer'
import NamesList from '../components/NamesList/NamesList'
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary'
import BuggyComponent from '../components/BuggyComponent/BuggyComponent'

function AppBase() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <TodoList />
      </div>
      <div className="card">
        <RenderCounter />
      </div>
      <div className="card">
        <Timer />
      </div>
      <div className="card">
        <NamesList />
      </div>
      <div className="card">
        <ErrorBoundary fallback={<p style={{ border: '2px solid red', padding: '10px' }}>¡Vaya! Algo salió mal en este componente.</p>}>
          <BuggyComponent />
        </ErrorBoundary>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppBase
