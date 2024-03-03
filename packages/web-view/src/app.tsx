import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Login />, children: [{ path: 'dashboard', element: <Dashboard /> }] },

    { path: '*', element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
