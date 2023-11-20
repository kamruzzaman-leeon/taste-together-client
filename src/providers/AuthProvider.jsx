import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from '../firebase/firebase.config';
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const googleSignIn = async () => {
    setLoading(true)
    try {
     return await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };
  const signIn = async (email, password) => {
    
    setLoading(true)
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
    };    
    

  const createUser = async (email, password) => {
    setLoading(true)
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } finally {
      setLoading(false);
    }
  }
  const handleUpdateProfile = async (name, photo) => {
    try {
      setLoading(true);

      return await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } finally {
      setLoading(false);
    }
  };
  const logOut = async () => {
    setLoading(true)
    return await signOut(auth);

  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email:userEmail}
      setUser(currentUser)
      if(currentUser){        
        axiosSecure.post('/jwt',loggedUser)
        .then(res=>{
          // console.log('token response',res.data)
        })
      } 
      else{
        axiosSecure.post('/logout',loggedUser)
        .then(res=>{
          // console.log(res.data)
        })
      } 
       
      setLoading(false);
      return () => {
        return unsubscribe();
      }
    })
  }, [axiosSecure,user?.email])

  const authInfo = {
    user,
    loading,
    googleSignIn,
    signIn,
    handleUpdateProfile,
    createUser,
    logOut,


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