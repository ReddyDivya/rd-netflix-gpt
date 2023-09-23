import React, {useState} from 'react'
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  return (
    <div>
        <Header/>
        <div className="absolute">
          <img className="" src={BG_URL} alt="logo"/>
        </div>
        <form className="w-full absolute md:w-3/12 p-12 bg-black my-30 mt-10 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            <input type="text" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700"/>
            <input type="text" placeholder="Email address" className="p-3 my-4 w-full bg-gray-700"/>
            <input type="text" placeholder="Password" className="p-3 my-4 w-full bg-gray-700"/>

            <p className="text-red-500 font-bold text-lg py-2">Error Message</p>
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-2 cursor-pointer">{isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now."}</p>
        </form>
    </div>
  )
}

export default Login