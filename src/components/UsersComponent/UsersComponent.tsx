import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootStateRTK, AppDispatchRTK } from '../../store/reduxToolkit/storeRTK';
import { fetchUsers } from '../../store/reduxToolkit/usersSlice';

export default function UsersComponent() {
  const { data, loading, error } = useSelector((state: RootStateRTK) => state.users);
  const dispatch = useDispatch<AppDispatchRTK>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Usuarios (RTK con createAsyncThunk)</h3>
      <ul>
        {data.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}