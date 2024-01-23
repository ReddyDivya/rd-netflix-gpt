import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/Browse";
import Movie from "./components/Movie";
import Comments from "./components/Comments";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/slices/appStore";
import Favourites from "./components/Favourites";
import WatchList from "./components/WatchList";
import GptSearch from "./components/GptSearch";

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
      { path: "gptSearch", element: <GptSearch/> },
      { path: "review", element: <Comments /> },
      { path: "favourites", element: <Favourites /> },
      { path: "watchlist", element: <WatchList /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();