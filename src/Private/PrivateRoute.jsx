import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
      const location = useLocation()
      const {user} = useContext(AuthContext)

      if(user) {
              return children
      }
      return (
            <Navigate state={location.pathname} to="/login"></Navigate>
      );
};

PrivateRoute.propTypes = {
      children: PropTypes.object.isRequired
}
export default PrivateRoute;