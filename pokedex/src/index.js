import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom"
import Root from './routes/Root';
import About from './routes/About';
import Home from './routes/Home';
import PokemonPage from './routes/PokemonPage';


const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
    //errorElement: <ErrorPage />,
      children: [
          {
              path: "",
              element: <Home />,
          },
          {
              path: "about",
              element: <About />,
          },
          {
              path: "pokemon/:id",
              element: <PokemonPage />,
          },
      ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);