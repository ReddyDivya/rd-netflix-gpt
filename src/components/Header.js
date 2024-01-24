import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaFilm, FaHeart, FaHome, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import {auth} from "../firebase";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { changeLanguage } from "../utils/slices/configSlice";
import { toggleGptSearchView } from "../utils/slices/gptSlice"; 

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const path = useSelector((store) => store.path.path);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  //Logout
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-0 md:px-2 py-0 md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between md:gap-2">
      <Link to='/browse'>
        <img className="w-44 mx-16 md:mx-0" src={LOGO} alt="logo" />
      </Link>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 mr-[-40px] bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <Link to='/browse'>
            {/* <button
              className="py-2 px-4 mx-24 md:mx-20 my-2 bg-blue-800 text-white rounded-lg mt-0 md:mt-1"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button> */}
            {
              showGptSearch ?  
              <button className="py-2 px-4 mr-60 md:mr-18 mx-20 md:mx-20 md:my-2 bg-blue-800 text-white rounded-lg mt-[4px] md:mt-1"
              onClick={handleGptSearchClick}>Home</button>
              : 
              <button className="py-2 px-4 ml-16 md:ml-0 mx-24 md:mx-20 my-2 bg-blue-800 text-white rounded-lg mt-0 md:mt-1"
              onClick={handleGptSearchClick}>GPT Search</button>
            }
          </Link>

          {/* User Profile*/}
          <div type="button" 
          // className="md:w-[100px] right-0 md:mx-[-1%] mt-1 absolute rounded-md z-30"
          className="md:w-[100px] left-[135px] md:left-[95%] md:right-0 mx-24 md:mx-[-1%] mt-[-4px] md:mt-0 absolute rounded-md z-30"
            onMouseEnter={() => setDropdownOpen(true)}
            ref={dropdownRef}>
            {user?.photoURL ? <img
              className="md:block w-12 h-12 rounded-full"
              alt="usericon"
              src={user?.photoURL}
            /> : <FaUserCircle className="text-white mt-2" style={{ fontSize: 30, cursor: 'pointer' }} />}
          </div>
          
          {/* dropdown for user-profile*/}
          {isDropdownOpen  && (
            <div className="absolute right-[15px] md:right-10 mt-14 w-32 z-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaUser className="inline mr-2" /> {user?.displayName}
                      
                  </button>
                  <Link to="/browse">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaHome className="inline mr-2" /> Home
                    </button>
                  </Link>
                  <Link to="/favourites">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaHeart className="inline mr-2" /> Favourites
                    </button>
                  </Link>
                  <Link to="/watchlist">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      role="menuitem"
                    >
                      <FaFilm  className="inline mr-2" /> Watchlist
                    </button>
                  </Link>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem" onClick={handleSignOut}
                  >
                    <FaSignOutAlt className="inline mr-2" /> Logout
                  </button>
                </div>  
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;