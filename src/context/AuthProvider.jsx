import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
// import { signInWithEmailLink } from "firebase/auth/cordova";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)
      }
      const signOutUser = () => {
            return signOut(auth)
      }
      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  setUser(currentUser)
            })
            return () => {
                  unSubscribe()
            }
      }, [])
      const emailRegister = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const updateUser = (updateData) => {
            return updateProfile(auth.currentUser, updateData)
      }
      const emailLogin = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password)
      }
      // const newsLatterSignIn = (email) => {
            
      //       console.log(email);
      //       return signInWithEmailLink(auth, email, window.location.href("https://mail.google.com"))
                  
                  
      // };


      const userAuth = {
            user,
            setUser,
            googleSignIn,
            signOutUser,
            emailRegister,
            updateUser,
            emailLogin,
            // newsLatterSignIn,
      }
      return (
            <AuthContext.Provider value={userAuth} >
                  {children}
            </AuthContext.Provider>
      );
};


AuthProvider.propTypes = {
      children: PropTypes.object.isRequired
}

export default AuthProvider;