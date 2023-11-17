import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from '../firebase/firebase.config';
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true);

    const googleSignIn = async () => {
        setLoading(true)
        try {
            await signInWithPopup(auth, googleProvider);
          } finally {
            setLoading(false);
          }
    };
    const signIn = async (email, password) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password);
          } finally {
            setLoading(false);
          }
    };
    const createUser = async (email, password) => {
        setLoading(true)
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } finally {
            setLoading(false);
        }       
    }
    const logOut = async () => {     
        setLoading(true)
        await signOut(auth);
    
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            // if(currentUser){

            // }
            // axios.post()
            setLoading(false);
            return ()=>{
                return unsubscribe();
            }
        })
    },[])

    const authInfo ={
        user,
        loading,
        googleSignIn,
        signIn,
        createUser,logOut,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;