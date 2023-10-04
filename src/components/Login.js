import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validation';
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../utils/userSlice';
import { BG_URL, USER_IMG } from '../utils/constant';


const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm,setIsSignInForm] = useState(true);
    const [isErrorMsg, setIsErrorMsg] = useState(null);
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const toggleSignInForm= ()=>{
         setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick =()=>{
        const userName = !isSignInForm
          ? username.current.value
          :null;

        const errMsg = checkValidData(userName,
          email.current.value,
          password.current.value
        );
        setIsErrorMsg(errMsg);
        if(errMsg) return;
        if (!isSignInForm) {
            // sign up
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                  displayName: username.current.value,
                  photoURL: USER_IMG,
                })
                  .then(() => {
                    // Profile updated!
                    const { uid, displayName, email, photoURL } =
                      auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL,
                      })
                    );
                  })
                  .catch((error) => {
                    setIsErrorMsg({
                      authError: error,
                    });
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsErrorMsg({ authError: errorMessage });
              });

        }else{
            // sign in
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                  dispatch(removeuser());
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsErrorMsg({ authError: errorMessage });
              });
        }
    }

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img className="md:fit md:w-scrren md:h-full h-screen object-cover" src={BG_URL} alt="background-img" />
      </div>
      <form
        className="absolute w-full md:w-4/12 p-14 bg-black bg-opacity-90 mx-auto my-36 right-0 left-0 text-white"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <h1 className="text-white font-medium text-3xl p-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        {!isSignInForm && (
          <div>
            <input
              ref={username}
              type="text"
              placeholder="Full Name"
              className="p-3 m-3 w-full rounded-md bg-slate-800"
              autoComplete="off"
            />
            {isErrorMsg && isErrorMsg.username && (
              <p className="px-3 text-orange-500">{isErrorMsg.username}</p>
            )}
          </div>
        )}
        <div>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 m-3 w-full rounded-md bg-slate-800"
            autoComplete="off"
          />
          {isErrorMsg && isErrorMsg.email && (
            <p className="px-3 text-orange-500">{isErrorMsg.email}</p>
          )}
        </div>
        <div>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 m-3 w-full rounded-md bg-slate-800"
            autoComplete="off"
          />
          {isErrorMsg && isErrorMsg.password && (
            <p className="px-3 text-orange-500">{isErrorMsg.password}</p>
          )}
        </div>
        <div>
          <button
            className="p-3 m-3 w-full bg-red-600 rounded-md cursor-pointer"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <div className="flex justify-between">
          <label className="text-sm text-gray-500">
            <input type="checkbox" className="p-2 m-2" /> Remember me
          </label>
          <span className="text-sm text-gray-500">Need help?</span>
        </div>
        {isErrorMsg && isErrorMsg?.authError && (
          <p className="px-3 text-orange-500">{isErrorMsg.authError}</p>
        )}
        <div className="">
          <div className="py-2 text-md text-white font-medium">
            <span className="text-sm text-gray-500">
              {isSignInForm ? "New to Netflix? " : "Already registered "}
            </span>
            <span onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up" : "Sign In"} now.
            </span>
          </div>

          <p className="text-sm text-gray-500 py-2">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login
