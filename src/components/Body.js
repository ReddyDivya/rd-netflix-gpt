import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Login from "./Login";
import Browse from "./Browse";
import Movie from './Movie';
import Favourites from "./Favourites";
import WatchList from "./WatchList";
import GptSearch from './GptSearch';
import Comments from "./Comments";
// import {Login, Browse, Movie, Favourites, WatchList, GptSearch, Comments} from "./index";

const Body = () => {

    //router configuration
    const appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/app",
        element: <App />,
        children: [
          { path: "gptSearch", element: <GptSearch /> },
          {
            path: "movie/:movieId",
            element: <Movie />,
          },
          { path: "browse", element: <Browse /> },
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