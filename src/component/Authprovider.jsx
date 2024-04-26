import {
    createUserWithEmailAndPassword, getAuth,
    signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const googleprovider=new GoogleAuthProvider();
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignin = () => {
        return signInWithPopup(auth, googleprovider)
    }
    const authInfo = {
        user, createUser, signIn,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default Authprovider