import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
      const [user,setUser] = useState(null)

      const userAuth = {

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