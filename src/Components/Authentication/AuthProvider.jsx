import React, { createContext, useState } from 'react';
export let AuthContext = createContext();
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';
let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();
let gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    let [loading, setLoading] = useState(true);
    let [signedUser, setSignedUser] = useState(null);

    let register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    let gitLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setSignedUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    let authentication = {
        register,
        logOut,
        login,
        googleLogin,
        gitLogin,
        signedUser,
        loading
    }

    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;