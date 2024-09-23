import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Musica from './routes/Musica.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/musica', element: <Musica /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
