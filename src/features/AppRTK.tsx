import { Provider } from 'react-redux'
import ContadorRTK from '../components/ContadorRTK/ContadorRTK.tsx'
import PokemonList from '../components/PokemonList/PokemonList.tsx'
import UsersComponent from '../components/UsersComponent/UsersComponent.tsx'
import { storeRTK } from '../store/reduxToolkit/storeRTK.ts'

function AppRTK() {

  return (
    <Provider store={storeRTK}>
      <div className="card">
        <ContadorRTK />
      </div>
      <div className="card">
        <UsersComponent />
      </div>
      <div>
        <PokemonList />
      </div>
    </Provider>
  )
}

export default AppRTK
