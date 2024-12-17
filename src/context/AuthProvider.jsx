import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";
// import { signInWithEmailLink } from "firebase/auth/cordova";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null)
      const [loding,setLoding] = useState(true)
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
                  if(currentUser?.email){
                        const user = {email : currentUser?.email}
                        axios.post(`${import.meta.env.VITE_URL}/jwt` , user , {
                              withCredentials: true
                        })
                        .then(() => {
                              setLoding(false)
                        }
                        )
                  }
                  else{
                        axios.post(`${import.meta.env.VITE_URL}/logout` , {} , {
                              withCredentials: true
                        })
                        .then(() =>{
                              setLoding(false)
                        }
                        )  
                  }
                 
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
            
      //       (email);
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
            loding ,
            setLoding,
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