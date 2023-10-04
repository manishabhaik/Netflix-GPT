import React from "react";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeuser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    // onAuthStateChange
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeuser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick =()=>{
    // toggle GPT search
    dispatch(toggleGptSearchView());
  }
  const handleLaguageChange =(e)=>{
      dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row">
      <img className="w-44 mx-auto cursor-pointer md:mx-0" src={LOGO_URL} alt="logo" />
      {userData && (
        <div className="flex p-2 justify-between">
          {showGptSearch && <select className="p-2 m-2 bg-gray-600 text-white" onChange={handleLaguageChange}>
            {SUPPORTED_LANGUAGES.map((lan) => (
              <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>
            ))}
          </select>}
          <button
            className="py-2 px-4 my-2 mx-4 text-white bg-slate-600 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ?"Home":"GPT Search"}
          </button>
          <img className="w-12 h-12 rounded-lg" src={userData?.photoURL} alt="user-img" />
          <button className="md:text-base text-xs font-bold text-white" onClick={handleSignOut}>
            Sign Out of Netflix
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
