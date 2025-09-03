import { Provider } from 'react-redux'
import ContadorRedux from '../components/ContadorRedux/ContadorRedux.tsx'
import { store } from '../store/reduxPuro/index.ts'

function AppRedux() {

  return (
    <Provider store={store}>
      <div className="card">
        <ContadorRedux />
      </div>
    </Provider>
  )
}

export default AppRedux
