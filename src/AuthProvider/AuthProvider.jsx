import React, { createContext } from 'react';
export const AuthContext = createContext(null)
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const createUser = (email, pass) => {
      return createUserWithEmailAndPassword(auth, email, pass)
    }
    const login = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const loginAndRegisterWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
    }
    const loginAndRegisterWithGithub = () =>{
       return signInWithPopup(auth, githubProvider)
    }
   


    const authInfo = {
        createUser,
        login,
        loginAndRegisterWithGoogle,
        loginAndRegisterWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;