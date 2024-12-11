import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
      const {user} = useContext(AuthContext)

      if(user) {
              return children
      }
      return (
            <Navigate to="/login"></Navigate>
      );
};

PrivateRoute.propTypes = {
      children: PropTypes.object.isRequired
}
export default PrivateRoute;