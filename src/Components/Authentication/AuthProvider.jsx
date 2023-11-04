import React, { createContext, useState } from 'react';
export let AuthContext = createContext();
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';
let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();
let gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let logOut = () => {
        return signOut(auth)
    }

    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    let gitLogin = () => {
        return signInWithPopup(auth, gitProvider);
    }

    let authentication = {
        register,
        logOut,
        login,
        googleLogin,
        gitLogin
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;