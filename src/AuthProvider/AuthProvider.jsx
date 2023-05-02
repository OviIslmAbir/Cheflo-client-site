import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, pass) => {

      return createUserWithEmailAndPassword(auth, email, pass)

    }
    const login = (email, pass) => {

        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut = () => {

        return signOut(auth)
    }
    const userProfile = (name, photo) =>{

        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const loginAndRegisterWithGoogle = () =>{

       return signInWithPopup(auth, googleProvider)
    }
    const loginAndRegisterWithGithub = () =>{

       return signInWithPopup(auth, githubProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
           setUser(loggedUser)
           setLoading(false)
         })
         return () => {
           unSubscribe()
         }
      }, [])
   


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        loginAndRegisterWithGoogle,
        loginAndRegisterWithGithub,
        logOut,
        userProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;