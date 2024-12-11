import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)
      const googleProvider = new GoogleAuthProvider()
      const googleSignIn  = () => {
            return signInWithPopup(auth , googleProvider)
      }
      const signOutUser = () =>{
            return signOut(auth)
      }
      useEffect(()=>{
           const unSubscribe = onAuthStateChanged(auth , (currentUser) =>{
                  setUser(currentUser)
            })
            return ()=>{
                  unSubscribe()
            }
      },[])
      const emailRegister = (email,password) => {
            return createUserWithEmailAndPassword(auth,email,password)
      }
      const updateUser = (updateData) =>{
            return updateProfile(auth.currentUser , updateData)
      }

      const userAuth = {
            user ,
            setUser,
            googleSignIn,
            signOutUser,
            emailRegister,
            updateUser,
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