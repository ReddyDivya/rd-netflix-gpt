import React, {useEffect} from 'react'
import {LOGO} from "../utils/constants";
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //fetching user details from the redux store using the useSelector
  const user = useSelector((store) => store.user);

  //signout
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      //automatically triggers onAuthStateChanged
    }).catch((error) => {
      navigate("/error");
    });
  }//handleSignout

  //pushing the userInfo while Sign up, Sign in to the redux store.
  useEffect(() => {
    //onAuthStateChanged is called during Sign up, sign in, sign out.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) 
        {
            //Sign up, sign in
          const {uid, displayName, email, photoURL} = user;
          dispatch(addUser({email:email, displayName:displayName, uid:uid, photoURL : photoURL}))
          navigate("/browse");
        } else {
            //sign out
            dispatch(removeUser());
            navigate("/");
        }
      });

      //cleaning. It's called when the onAuthStateChanged unmounts
      return() => unsubscribe();
}, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>

        {
          user && <div className="flex m-2">
          <img className="w-10 h-10 mx-4 my-2" 
          alt="usericon"
          src={user?.photoURL} 
          />
          <button onClick={handleSignout} className="bg-red-500 font-bold w-20 h-10 mt-2 rounded-lg text-white">Signout</button>
        </div>
        }
        
    </div>
  )
}

export default Header;