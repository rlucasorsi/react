import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Pagina de contato
import Contact from './routes/Contact.jsx';

// Pagina de erro
import ErrorPage from './routes/ErrorPage.jsx';

// Pagina de home
import Home from './routes/Home.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // 3- Componente base
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: 'contact',
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
