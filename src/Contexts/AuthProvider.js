import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loding, setloding] = useState(true);

    const providerLogin = (provider)=> {
        setloding(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password)=> {
        setloding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password)=> {
        setloding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = ()=> {
        setloding(true);
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setloding(false);
        })
        return ()=> {
            unSubscribe();
        }
    },[])


    const authInfo = {user, loding, createUser, loginUser, logOutUser, providerLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;