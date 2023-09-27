import React from 'react'
import {LOGO} from "../utils/constants";
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  //fetching user details from the redux store using the useSelector
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"/>

        {
          user && <div className="flex m-2">
          <img className="w-14 h-14 mx-4" src={user.photoURL}/>
          <button onClick={handleSignout} className="bg-red-500 font-bold w-20 h-10 mt-2 rounded-lg text-white">Signout</button>
        </div>
        }
        
    </div>
  )
}

export default Header;