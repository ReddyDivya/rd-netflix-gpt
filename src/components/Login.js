import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { BG_URL } from "../utils/constants";
import {checkValidData} from "../utils/validate";
import { addUser } from '../utils/slices/userSlice'; 
import Header from "./Header";
import Footer from './Footer';
// import {Header, Footer} from "./index.js";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  //referencing the input fields
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  //sign in/sign up button
  const handleButtonClick = () => {
    const errorMsg = checkValidData(email.current.value, password.current.value);

    setErrorMessage(errorMsg);//error message

    if(errorMsg) return;//returns error message if there's any

    //Sign up form
    if(!isSignInForm)
    {
      //creating the user in the firebase
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name.current.value, 
          // photoURL: USER_AVATAR
        }).then(() => {
          const {displayName, email, uid, photoURL} = auth.currentUser;

           //making dispatch call again to update the displayName, photo
          dispatch(addUser({displayName:displayName, 
            uid : uid, 
            email : email, 
            photoURL : photoURL
          }))

          navigate("/browse");
        }).catch((error) => {
          navigate("/error");
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }
    else //Sign-In
    {
      //Sign In with email, password
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    }
  }//handleButtonClick

  //sign in, sign up forms toggle
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
        <Header/>
        <div className="absolute">
          <img className="h-screen object-cover md:w-screen" src={BG_URL} alt="logo"/>
        </div>
        <form onSubmit = {(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-30 mt-36 md:mt-10 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && <input type="text" ref={name} placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700"/>}
            <input type="text" ref={email} placeholder="Email address" className="p-3 my-4 w-full bg-gray-700"/>
            <input type="password" ref={password} placeholder="Password" className="p-3 my-4 w-full bg-gray-700"/>

            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg"
              onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p onClick={toggleSignInForm}
            className="py-2 cursor-pointer">{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now."}</p>
        </form>
        <Footer/>
    </div>
  )
}

export default Login