import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

      const userAuth = {
            user ,
            setUser,
            googleSignIn,
            signOutUser,
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