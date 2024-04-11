import { createUserWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth) 
    }
    // google login-------------------------------
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, curUser=>{
            console.log("State changed and user: ", curUser);
            setUser(curUser); 
            setLoading(false);
        })
        return (()=>{
            unSubscribe();
        })
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;