import React, {useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

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
    ])

    /*
        Doing it in a Root level for efficient coding.
        pushing the userInfo while Sign up, Sign in to the redux store.
    */
    useEffect(() => {
        //onAuthStateChanged is called during Sign up, sign in, sign out.
        onAuthStateChanged(auth, (user) => {
            if (user) 
            {
                //Sign up, sign in
              const {uid, displayName, email, photoURL} = user;
              dispatch(addUser({email:email, displayName:displayName, uid:uid, photoURL : photoURL}))
            } else {
                //sign out
                dispatch(removeUser());
            }
          });
    }, []);


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body