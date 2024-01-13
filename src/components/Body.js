import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";
import Movie from './Movie';
import Favourites from "./Favourites";
import WatchList from "./WatchList";

const Body = () => {

    //router configuration
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
        {
            path: "/movie/:movieId",
            element: <Movie/>,
        },
        {
            path: "/favourites",
            element: <Favourites/>
        },
        {
            path: "/watchlist",
            element: <WatchList/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body