import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";
import Movie from './Movie';
import Favourites from "./Favourites";
import WatchList from "./WatchList";
import GptSearch from './GptSearch';
import Comments from "./Comments";
import App from '../App';

const Body = () => {

    //router configuration
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/",
        element: <App />,
        children: [
          { path: "browse", element: <Browse /> },
          {
            path: "movie/:movieId",
            element: <Movie />,
          },
          { path: "gptSearch", element: <GptSearch /> },
          { path: "review", element: <Comments /> },
          { path: "favourite", element: <Favourites /> },
          { path: "watchlist", element: <WatchList /> },
        ],
      },
    ]);

  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body