import React, { createContext, useState } from 'react';
export let AuthContext = createContext();
import {createUserWithEmailAndPassword, getAuth, signOut} from "firebase/auth";
import { app } from './firebase.config';
let auth=getAuth(app)

const AuthProvider = ({ children }) => {

    let register = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    let logOut = () => {
        return signOut(auth)
    }

    let authentication={
        register,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;