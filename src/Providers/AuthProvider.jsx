import { createUserWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth) 
    }
    // google login-------------------------------
    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, curUser=>{
            console.log("State changed and user: ", curUser);
            setUser(curUser);
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
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;